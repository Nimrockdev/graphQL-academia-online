"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const schema_1 = __importDefault(require("./schema"));
const graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const app = express_1.default();
app.use('*', cors_1.default());
app.use(compression_1.default());
const servidor = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
    validationRules: [graphql_depth_limit_1.default(2)],
    introspection: true
});
servidor.applyMiddleware({ app });
app.get('/', graphql_playground_middleware_express_1.default({
    endpoint: '/graphql'
}));
const httpServer = http_1.createServer(app);
const PORT = process.env.PORT || 5200;
httpServer.listen({
    port: PORT
}, () => console.log(`Servidor academia online listo http://localhost:${PORT}`));
