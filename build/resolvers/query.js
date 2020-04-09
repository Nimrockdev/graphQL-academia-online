"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_store_1 = require("../data/data.store");
const query = {
    Query: {
        estudiantes() {
            return data_store_1.database.estudiantes;
        },
        estudiante(__, { id }) {
            const resultado = data_store_1.database.estudiantes.filter(estudiante => estudiante.id === id)[0];
            if (resultado === undefined) {
                return {
                    id: '-1',
                    name: `No se ha encontrado el estudiante con el ID ${id}`,
                    email: '',
                    courses: []
                };
            }
            return resultado;
        },
        cursos() {
            return data_store_1.database.cursos;
        },
        curso(__, { curso }) {
            const resultado = data_store_1.database.cursos.filter(curso_ => curso_.id === curso)[0];
            if (resultado === undefined) {
                return {
                    id: '-1',
                    title: `No se ha encontrado el curso con el ID ${curso}`,
                    description: '',
                    clases: -1,
                    time: 0.0,
                    logo: '',
                    level: 'TODOS',
                    path: '',
                    teacher: '',
                    reviews: []
                };
            }
            return resultado;
        }
    }
};
exports.default = query;
