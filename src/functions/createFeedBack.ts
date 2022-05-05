import { Request } from "express";
import { connect } from "../connectDataBase";

export function createFeedBack(req: Request) {
  const feedback = req.body;
  const sql = `INSERT INTO feedbacks(type,coment,screenShot)
               VALUES("${feedback.type}","${feedback.coment}","${
    feedback.screenShot === undefined ? null : feedback.screenShot
  }")`;
  connect.query(sql, (err) => {
    if (err) throw err;
  });

  return "Create sucess"!;
}
