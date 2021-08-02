exports.postdataFunction = function(req, res) {
  var mongoose = require("mongoose");
  //--mongodb connection string
  let dbPath = "mongodb://localhost/sampledata";
  mongoose.connect(dbPath, { useNewUrlParser: true });
  mongoose.connection.once("open", function() {
    console.log("Database Connection Established Successfully.");
  }); //--use customersModel to perform db operations on customers class
  var customersModel = require("../model/customers.js").customersmodel;
  try {
    //--get input
    var startDate = req.body.startDate;
    var endDate = req.body.endDate;
    //--save to customer
    var customer = new customersModel({
      startDate: startDate,
      endDate: endDate
    });
    customer.save(function(err, docs) {
      if (err) {
        res.json(err);
      } else {
        console.log(`Inserted: ${docs.length} rows`);
        res.send("data inserted");
      }
    });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
