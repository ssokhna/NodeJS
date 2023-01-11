#! /usr/bin/env node
//shebang

console.log("----------------------------");
console.log("           SHELL              ");
console.log("----------------------------");


const ps = require("prompt-sync");
const prompt = ps();

let commande = prompt(">");

if (commande == "ls -la") {
    const { exec } = require('child_process')

    // lance la commande `ls -la` en utilisant exec
    
    exec('ls -la ', (err, output) => {
    //une fois la commande terminée, la fonction de rappel est appelée
        if (err) {
           // enregistre et retourne si nous rencontrons une erreur
            console.error("could not execute command: ", err)
            return
        }
    // enregistre la sortie reçue de la commande
        console.log("Output: \n", output)
    })
            
}

else if (commande == "ls") {
    const { exec } = require("child_process");
    
    exec("ls", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });         
}

else if (commande == "mkdir") {
    const { exec } = require("child_process");
    
    exec("mkdir fichierr", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });         
}

else(console.log("error !"))
