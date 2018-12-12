let jsonConverter = json => {
  let cvsData = "";
  let itemname = [];
  for (const e of Object.keys(json)) {
    if (!Array.isArray(json[e])) itemname.push(e);
  }
  cvsData += itemname.join(",") + "\n";

  let addData = someJson => {
    let tempData=[];
    for (const item of itemname) {
        tempData.push(someJson[item]);
    }
    cvsData += tempData.join(',') + '\n';
    if (someJson.children.length){
        for (const item of someJson.children) {
            addData(item);
        }
    }
  };
  addData(json);

  return cvsData;
};

module.exports.jsonConverter = jsonConverter;

// let testJson = {
//   firstName: "Joshie",
//   lastName: "Wyattson",
//   county: "San Mateo",
//   city: "San Mateo",
//   role: "Broker",
//   sales: 1000000,
//   children: [
//     {
//       firstName: "Beth Jr.",
//       lastName: "Johnson",
//       county: "San Mateo",
//       city: "Pacifica",
//       role: "Manager",
//       sales: 2900000,
//       children: [
//         {
//           firstName: "Smitty",
//           lastName: "Won",
//           county: "San Mateo",
//           city: "Redwood City",
//           role: "Sales Person",
//           sales: 4800000,
//           children: []
//         },
//         {
//           firstName: "Allen",
//           lastName: "Price",
//           county: "San Mateo",
//           city: "Burlingame",
//           role: "Sales Person",
//           sales: 2500000,
//           children: []
//         }
//       ]
//     },
//     {
//       firstName: "Beth",
//       lastName: "Johnson",
//       county: "San Francisco",
//       city: "San Francisco",
//       role: "Broker/Sales Person",
//       sales: 7500000,
//       children: []
//     }
//   ]
// };

// console.log(jsonConverter(testJson));
