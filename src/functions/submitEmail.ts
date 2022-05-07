import nodemailer from "nodemailer";
import { Request } from "express";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: { user: "97a1d7d7318924", pass: "20398462454d21" },
});

export function submitEmail(req: Request) {
  const feedback = req.body;
  transport.sendMail(
    {
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
    },
    () => console.log("Email enviado com sucesso")
  );
}
