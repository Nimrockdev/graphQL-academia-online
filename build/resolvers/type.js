"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_store_1 = require("../data/data.store");
const lodash_1 = __importDefault(require("lodash"));
const type = {
    Estudiante: {
        courses: parent => {
            const cursosLista = [];
            parent.courses.map((curso) => {
                cursosLista.push(lodash_1.default.filter(data_store_1.database.cursos, ['id', curso])[0]);
            });
            return cursosLista;
        }
    },
    Curso: {
        students: parent => {
            const listaEstudiantes = [];
            const idCurso = parent.id;
            data_store_1.database.estudiantes.map((estudiante) => {
                if (estudiante.courses.filter((id) => id === idCurso) > 0) {
                    listaEstudiantes.push(estudiante);
                }
            });
            return listaEstudiantes;
        },
        path: parent => `https://www.udemy.com${parent.path}`
    }
};
exports.default = type;
