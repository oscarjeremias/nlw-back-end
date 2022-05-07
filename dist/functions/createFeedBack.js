"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFeedBack = void 0;
const connectDataBase_1 = require("../connectDataBase");
function createFeedBack(req) {
    const feedback = req.body;
    const sql = `INSERT INTO feedbacks(type,coment,screenShot)
               VALUES("${feedback.type}","${feedback.coment}","${feedback.screenShot === undefined ? null : feedback.screenShot}")`;
    connectDataBase_1.connect.query(sql, (err) => {
        if (err)
            throw err;
    });
    return "Create sucess";
}
exports.createFeedBack = createFeedBack;
