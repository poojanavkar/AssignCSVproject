exports.searchFunction = function(req, res) {
  // npm packages
  var json2csv = require("json2csv").parse;
  var fs = require("fs");
  var mongoose = require("mongoose");
  //--mongodb connection string
  let dbPath = "mongodb://localhost/sampledata";
  mongoose.connect(dbPath, { useNewUrlParser: true });
  mongoose.connection.once("open", function() {
    console.log("Database Connection Established Successfully.");
  });
  //--use customersModel to perform db operations on customers class
  var customersModel = require("../model/customers.js").customersmodel;
  try {
    //--inputs
    var startDate = req.query.startDate;
    var endDate = req.query.endDate;
    //--search query to get res
    customersModel
      .find({ $and: [{ startDate: startDate }, { endDate: endDate }] })
      .lean()
      .exec({}, function(err, docs) {
        if (err) {
          res.json(err);
        } else {
          console.log(`fetched: ${docs.length} rows`);
          console.log(JSON.stringify(docs));
          var fields = ["_id", "startDate", "endDate"];
          //--convert result to csv format
          var csv;

          csv = json2csv(docs, { fields });
          var path = "./downloads/file" + Date.now() + ".csv";

          fs.writeFile(path, csv, function(err, data) {
            if (err) {
              res.json(err);
            } else {
              res.download(path);
              //--create the url for user
              var url =
                "http://localhost:3001/downloads/file" + Date.now() + ".csv";
              res.send(url);
            }
          });
        }
      });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
