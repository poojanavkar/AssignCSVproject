//-- Include Packages
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
//--Initialize the application
var app = express();
app.use(cors());
//--to support JSON-encoded bodies
app.use(bodyParser.json());
// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));
//--define port
var PORT = 3001;

//--multer to get file input from formdata
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./uploads/");
  },
  filename: function(req, file, callback) {
    callback(null, file.originalname);
  }
});
var upload = multer({ storage: storage });
exports.upload = function(req, res) {};
//--call the routes
var uploaddata = require("./routes/upload.js");
var postdata = require("./routes/postdata.js");
var searchdata = require("./routes/search.js");

//--use upload as middleware to get file
app.post("/upload", upload.single("file"), uploaddata.uploadFunction);

//--post api to save startDate & endDate
app.post("/postdata", postdata.postdataFunction);

//--search route to get result accordinly
app.get("/search", searchdata.searchFunction);

//-- Start the server
app.listen(PORT, function() {
  console.log("listening on port " + PORT);
});
