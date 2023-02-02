//shell avec promesse

function monShell(commande){
    const { execSync } = require('child_process')
    return new Promise((resolve,reject) => {
        execSync(commande,(err, output) => {
            if (err) {
                return reject(err)
            }
            resolve(output)
    
        });
});
}

console.log("----------------------------");
console.log("           SHELL              ");
console.log("----------------------------");

const ps = require("prompt-sync");
const prompt = ps();

let commande = prompt(">");
do {
    if (commande == "exit") {
        break }

    else {
      console.log(monShell(commande))
    }
  
    commande = prompt(">");

}while (true)
