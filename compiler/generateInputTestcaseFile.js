const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");
const dirTestcaseInputs = path.join(__dirname, "testCaseInputs");
if (!fs.existsSync(dirTestcaseInputs)) {
  fs.mkdirSync(dirTestcaseInputs, { recursive: true });
}
const generateInputTestcaseFile = (input) => {
  const jobID = uuid();
  const input_fileName = `${jobID}.txt`;
  const input_filePath = path.join(dirTestcaseInputs, input_fileName);
  fs.writeFileSync(input_filePath, input);
  return input_filePath;
};

module.exports = { generateInputTestcaseFile };
