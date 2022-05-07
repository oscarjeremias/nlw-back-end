import { connect } from "./connectDataBase";

export const schema = `
CREATE  TABLE feedbacks (
  id int NOT NULL AUTO_INCREMENT,
  type varchar(255) NOT NULL,
  coment varchar(2550) NOT NULL,
  screenShot text(15000) NULL,

  PRIMARY KEY (id)
)
`;

connect.query(schema, (err, result, fields) => {
  if (err) throw err;
  console.log(result, fields);
});
