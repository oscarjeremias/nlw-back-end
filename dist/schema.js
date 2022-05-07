"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const connectDataBase_1 = require("./connectDataBase");
exports.schema = `
CREATE  TABLE feedbacks (
  id int NOT NULL AUTO_INCREMENT,
  type varchar(255) NOT NULL,
  coment varchar(2550) NOT NULL,
  screenShot text(15000) NULL,

  PRIMARY KEY (id)
)
`;
connectDataBase_1.connect.query(exports.schema, (err, result, fields) => {
    if (err)
        throw err;
    console.log(result, fields);
});
