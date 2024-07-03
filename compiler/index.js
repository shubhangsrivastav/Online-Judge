const express = require("express");
const app = express();
const { generateFile } = require("./generateFile");
const { generateInputFile } = require("./generateInputFile");
const { executeCpp } = require("./executeCpp");
const cors = require("cors");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ online: "compiler" });
});

app.post("/run", async (req, res) => {
  const { language = "cpp", code, input } = req.body;
  if (code === undefined) {
    return res.status(400).json({ success: false, message: "Empty Code!" });
  }
  try {
    const filePath = await generateFile(language, code);
    const inputPath = await generateInputFile(input);
    const output = await executeCpp(filePath, inputPath);
    res.send({ filePath, output, inputPath });
  } catch (error) {
    res.status(500).json({ success: false, message: "error" + error.message });
  }
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
