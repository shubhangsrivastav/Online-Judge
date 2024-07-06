const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const outputPath = path.join(__dirname, "outputs");
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}
const executePython = (filePath,inputPath) => {
  const jobID = path.basename(filePath);
  
  
 
 return  new Promise((resolve, reject) => {
  
    exec(
      `python3 ${jobID} `,
      (error, stdout, stderr) => {
        
        if (error) {
          reject(error);
           
        }
        if (stderr) {
          reject(stderr);
          
        }
        resolve(stdout);
        
      }
    );
  });
  
  
  
};

module.exports = { executePython };
