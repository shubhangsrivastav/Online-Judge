const express = require("express");
const path = require("path");
const app = express();
const { DBconnections } = require("./database/db.js");
const { generateFile } = require("./generateFile");
const { generateInputFile } = require("./generateInputFile");
const { generateInputTestcaseFile } = require("./generateInputTestcaseFile");
const { executeCpp } = require("./executeCpp");
const { executePython } = require("./executePython");
const { executeJavascript } = require("./executeJavascript");
const cors = require("cors");
const Problem = require("./models/problem.js");
const Submission = require("./models/submission.js");
DBconnections();

//middleware generateInputTescaseFile
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:"https://oj-frontend.onrender.com",credentials:true}));

app.get("/", (req, res) => {
  res.json({ online: "compiler" });
});

app.post("/run", async (req, res) => {
  const { language = "cpp", code, testCaseInput } = req.body;
  if (code === undefined) {
    return res.status(400).json({ success: false, message: "Empty Code!" });
  }
  try {
    const filePath = await generateFile(language, code);
    const inputPath = await generateInputFile(testCaseInput);
    let output;
    if (language == "cpp") {
      output = await executeCpp(filePath, inputPath);
    }
    if (language == "python") {
      output = await executePython(filePath, inputPath);
    }
    if (language == "javascript") {
      output = await executeJavascript(filePath, inputPath);
    }

    res.send({ filePath, output, inputPath });
  } catch (error) {
    res.status(500).json({ success: false, message: "error" + error.message });
  }
});

app.post("/submit/:pid", async (req, res) => {
  const { code, language, userName } = req.body;

  if (code === undefined) {
    return res.status(400).json({ success: false, message: "Empty Code!" });
  }
  try {
    const problem = await Problem.findById(req.params.pid);

    const testCaseInput = problem.testCaseInput;
    const testCaseOutput = problem.testCaseOutput;
    const problemTitle = problem.title;
    const currsub = problem.submissions;
    const filePath = await generateFile(language, code);
    const inputTestCaseFilePath = await generateInputTestcaseFile(
      testCaseInput
    );
    let output;
    if (language == "cpp") {
      output = await executeCpp(filePath, inputTestCaseFilePath);
    }
    if (language == "python") {
      output = await executePython(filePath, inputTestCaseFilePath);
    }
    if (language == "javascript") {
      output = await executeJavascript(filePath, inputTestCaseFilePath);
    }

    const actualOutput = testCaseOutput.split(" ");
    const outputGenerated = output.split("\n");
    // console.log(actualOutput);
    // console.log(outputGenerated);
    outputGenerated.pop();
    var size = actualOutput.length;
    let p = -1;
    for (var i = 0; i < size; i++) {
      if (
        outputGenerated.length < i ||
        actualOutput[i] !== outputGenerated[i]
      ) {
        p = i + 1;
        break;
      }
    }
    var verdict = "Accepted";
    if (p !== -1) {
      verdict = `Wrong Answer on Test Case ${p}`;
    }
    const myTime = new Date();
    const date = myTime.toString().split("GMT")[0];
    const formattedTime = `${date}`;
    
    const submission = await Submission.create({
      userName,
      problemTitle,
      verdict,
      timeOfSubmission: formattedTime,
    });
    const update = await Problem.updateOne(
      { _id: problem._id },
      { $set: { submissions: currsub + 1 } }
    );
    if (p !== -1) {
      return res
        .status(200)
        .json({ message: `Wrong Answer on Test Case ${i + 1}`, output });
    }

    res.status(200).json({ message: "Accepted" });
  } catch (error) {
    console.error(error);
  }
});

app.listen(8081, () => {
  console.log("Server listening on port 8081");
});
