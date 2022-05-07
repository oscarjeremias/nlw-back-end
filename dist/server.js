"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const createFeedBack_1 = require("./functions/createFeedBack");
const submitEmail_1 = require("./functions/submitEmail");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = 5500;
app.post("/feedback", (req, res) => {
    (0, createFeedBack_1.createFeedBack)(req);
    (0, submitEmail_1.submitEmail)(req);
    res.status(201).send("create sucess");
});
app.listen(port, () => {
    console.log(`Servidor em pé na porta ${port}`);
});
