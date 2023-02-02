
console.log("----------------------------");
console.log("           SHELL              ");
console.log("----------------------------");

console.log("Supported commands: ls -la, ls, pwd, cat, echo");
console.log("type 'exit' to quit \n")


const ps = require("prompt-sync");
const prompt = ps();

let commande = prompt(">");

do {

    if (commande == "ls -la") {
        const  {execSync}  = require('child_process')
        // lance la commande `ls -la` en utilisant execSync
        try {
            const output = execSync("ls -la").toString();
            console.log(output);
            }catch (error) {
            console.error("could not execute command: ", error);
            }       
          }

    else if (commande == "ls") {
        const { execSync } = require("child_process");
        try{
            const output = execSync("ls").toString();
            console.log( output);
          } catch (error) {
            console.error("could not execute command: ", error);
          }        
    }

    else if (commande == "pwd") {
        const { execSync } = require("child_process");
        try {
            const output = execSync("pwd").toString();
            console.log( output);
            }catch (error) {
            console.error("could not execute command: ", error);
            }
      } 

      else if (commande.startsWith("cat")) {
        const fileName = commande.split(" ")[1];
        const { execSync } = require("child_process");
    
        try {
            const output = execSync(`cat ${fileName}`).toString();
            console.log( output);
            }catch (error) {
            console.error("could not execute command: ", error);
            }
      }


    else if (commande.startsWith("echo")) {
      const { execSync } = require("child_process");
      const args = commande.split(" ").slice(1);
  
      try {
          const output = execSync(`echo ${args.join(" ")}`).toString();
          console.log(output);
        }catch (error) {
          console.error("could not execute command: ", error);
      }
    }
  

    else if (commande=="exit"){
        break }

    else(console.log("error !"))

    commande = prompt(">");

} while (true) 
