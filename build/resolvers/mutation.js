"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const data_store_1 = require("../data/data.store");
const mutation = {
    Mutation: {
        cursoNuevo(__, { curso }) {
            const itemCurso = {
                id: String(data_store_1.database.cursos.length + 1),
                title: curso.title,
                description: curso.description,
                clases: curso.clases,
                time: curso.time,
                level: curso.level,
                logo: curso.logo,
                path: curso.path,
                teacher: curso.teacher,
                reviews: []
            };
            if (data_store_1.database.cursos.filter(itemCurs => itemCurs.title === itemCurso.title).length === 0) {
                data_store_1.database.cursos.push(itemCurso);
                return itemCurso;
            }
            return noCompletado(1);
        },
        modificarCurso(__, { curso }) {
            const elemeentoExiste = lodash_1.default.findIndex(data_store_1.database.cursos, function (o) {
                return o.id === curso.id;
            });
            if (elemeentoExiste > -1) {
                const valoraciones = data_store_1.database.cursos[elemeentoExiste].reviews;
                curso.reviews = valoraciones;
                data_store_1.database.cursos[elemeentoExiste] = curso;
                return curso;
            }
            return noCompletado(2);
        },
        eliminarCurso(__, { id }) {
            const borraCurso = lodash_1.default.remove(data_store_1.database.cursos, function (curso) {
                return curso.id === id;
            });
            if (borraCurso[0] === undefined) {
                return noCompletado(3);
            }
            return borraCurso[0];
        }
    }
};
exports.default = mutation;
function noCompletado(operacion) {
    let title = '';
    switch (operacion) {
        case 1: {
            title = 'El curso ya existe con este titulo';
            break;
        }
        case 2: {
            title = 'El curso no existe en la base de datos';
            break;
        }
        case 3: {
            title = 'El curso no se puede borrar porque no se ha encontrado ningún curso con ese ID';
            break;
        }
        default: {
            break;
        }
    }
    return {
        id: '-1',
        title,
        description: '',
        clases: -1,
        time: 0.0,
        level: 'TODOS',
        logo: '',
        path: '',
        teacher: '',
        reviews: []
    };
}
