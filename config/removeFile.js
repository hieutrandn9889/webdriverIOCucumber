/* eslint-disable no-console */
const fs = require("fs");

const path1 = "./rerun.sh";
const path2 = "./results";
const path3 = "./_results_/";
const path4 = "./report";

try {
  fs.unlinkSync(path1, { recursive: true, force: true });
  console.log("File removed:", path1);
} catch (err) {
  console.error(err);
}

try {
  fs.rmSync(path2, { recursive: true, force: true });
  console.log("File removed:", path2);
} catch (err) {
  console.error(err);
}

try {
  fs.rmSync(path3, { recursive: true, force: true });
  console.log("File removed:", path3);
} catch (err) {
  console.error(err);
}

try {
  fs.rmSync(path4, { recursive: true, force: true });
  console.log("File removed:", path4);
} catch (err) {
  console.error(err);
}
