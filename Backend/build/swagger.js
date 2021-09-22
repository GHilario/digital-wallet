"use strict";const swaggerAutogen = require('swagger-autogen')({ language: 'pt-BR' });

const outputFile = './swagger_output.json';
const endpointsFiles = [`${__dirname}/routes.js`];

const doc = {
    info: {
        version: "1.0.0",
        title: "Digital Wallet API",
        description: "Api Digital Wallet"
    },
    host: "localhost:3333",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Verificação",
            "description": "Endpoints"
        },
        {
            "name": "Movimentação",
            "description": "Endpoints"
        },
        {
            "name": "Saldo",
            "description": "Endpoints"
        },
        {
            "name": "Autenticação",
            "description": "Endpoints"
        },
        {
            "name": "Usuário",
            "description": "Endpoints"
        },
    ],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
    },
    definitions: {
        Base: {
            message: 'Mensagem',
        },
        Usuario: {
            $login: "joao.silva",
            $senha: '123456',
            nome: "João Silva"
        },
        Login: {
            $login: "joao.silva",
            $senha: '123456',
        },
        Saldo: {
            login: "joao.silva",
            saldo: 100,
        },
        AddMovimentacao: {
            login_destino:"maria.jose",
            valor_transferido:50
        },
        Movimentacao: {
                id_transacao: 1,
                login_destino: "maria.jose",
                valor_transferido: 50,
                login_origem: "joao.silva",
                data: "2021-09-20T08:17:09.513Z"
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc);