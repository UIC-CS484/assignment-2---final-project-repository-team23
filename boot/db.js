var db = require('../db');


module.exports = function() {

  db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS user( \
      id INTEGER NOT NULL, \
      username TEXT UNIQUE, \
      hashed_password BLOB, \
      salt BLOB, \
      name TEXT, \
      email TEXT, \
      PRIMARY KEY (id)\
    )");
  });

    db.run("CREATE TABLE if not exists user_feedback (\
        user_feedback_id INTEGER NOT NULL, \
        user_feedback2user INTEGER, \
        feedback blob, \
        appointment	TEXT, \
        PRIMARY KEY(user_feedback_id), \
        FOREIGN KEY(user_feedback2user) REFERENCES user(id)\
    )");
  //db.close();

};
