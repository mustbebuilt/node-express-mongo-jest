const { MongoClient } = require("mongodb");
const Db = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
//const Db = process.env.DATABASE_URL;
const DbName = process.env.DATABASE_NAME || "moviesDb";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        dbConnection = db.db(DbName);
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return dbConnection;
  },
  getObjectId: function () {
    var ObjectId = require("mongodb").ObjectId;
    return ObjectId;
  },
};
