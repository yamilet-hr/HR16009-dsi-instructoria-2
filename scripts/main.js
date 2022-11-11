"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
let lista = ['Ver doramas', ' Limpiar la casa', ' Estudiar para parcial'];
app.get('/', (req, res) => {
    res.send('Lista de acciones para realizar<br>' + lista);
});
app.listen(Number(process.env.PORT), () => {
    console.log(`App listening on port ${process.env.PORT}`);
});
app.post('/:param', (req, res) => {
    const { param } = req.params;
    lista.push(`${param}`);
    res.send(lista);
});
