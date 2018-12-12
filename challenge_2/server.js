// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.

let express = require("express");
let app = express();
let controller = require("./controller");
let path = require("path");
let bodyParser = require("body-parser");
var multer  = require('multer')
let upload = multer({dest:'uploads/'});
let fs = require('fs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/index.html"));
});

app.post("/", upload.single('jsonform'),(req, res) => {
//   let jsonData = req.file;
let data = JSON.parse(fs.readFileSync(req.file.path));
  let cvsData = controller.jsonConverter(data);
  res.send(cvsData);
});

app.listen(3000);
