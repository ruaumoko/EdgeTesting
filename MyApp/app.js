'use strict';

const edge = require("edge-js");
const path = require("path");

const baseNetAppPath = path.join(__dirname, "./lib/");

process.env.EDGE_USE_CORECLR = 1;
process.env.EDGE_APP_ROOT = baseNetAppPath;

//const target = "netcoreapp1.1";
const target = "netcoreapp2.2"


var clrMethod = edge.func({
  assemblyFile: path.join(baseNetAppPath, "../../MyLibrary/bin/Debug/" + target + "/MyLibrary.dll"),
  typeName: "MyLibrary.MyClass",
  methodName: "MyMethod"
});

clrMethod(1, (error, result) => {
  console.log(result);
})

console.log("Done");
