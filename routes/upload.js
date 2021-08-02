exports.uploadFunction = function(req, res) {
  try {
    //--package to convert csv file to json
    const csvtojson = require("csvtojson");
    var mongoose = require("mongoose");
    //--mongodb connection string
    let dbPath = "mongodb://localhost/sampledata";
    mongoose.connect(dbPath, { useNewUrlParser: true });
    mongoose.connection.once("open", function() {
      console.log("Database Connection Established Successfully.");
    }); //--use customersModel to perform db operations on customers class
    var customersModel = require("../model/customers.js").customersmodel;
    var file = req.file.path;
    console.log(file);
    csvtojson()
      .fromFile(file)
      .then(csvData => {
        console.log(csvData);
        //--save data from csv file to datbase directly
        customersModel.collection.insertMany(csvData, (err, docs) => {
          if (err) {
            res.json(err);
          } else {
            console.log(`Inserted: ${docs.insertedCount} rows`);
            res.send("data inserted");
          }
        });
      });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
