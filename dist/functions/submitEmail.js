"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: { user: "97a1d7d7318924", pass: "20398462454d21" },
});
function submitEmail(req) {
    const feedback = req.body;
    transport.sendMail({
        from: "Equipe Feedback <oi@feedback.com>",
        to: "oscar jeremias <oscarjeremiasdev@gmail.com>",
        subject: "Novo feedback",
        html: [
            `<div style="font-family: sans-serif; color: #111;">`,
            `<p><Tipo de feedback ${feedback.type}/p>`,
            `<p>Comentario ${feedback.coment}</p>`,
            feedback.screenShot ? `<img src="${feedback.screenShot}">` : ``,
            `</div>`,
        ].join(""),
    }, () => console.log("Email enviado com sucesso"));
}
exports.submitEmail = submitEmail;
