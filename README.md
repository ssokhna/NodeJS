# NodeJS

Le code ci-dessus est une implémentation simple d'un shell en Node.js qui peut exécuter les commandes "ls -la", "ls", "pwd","echo", "cat" et "exit".
Il utilise la bibliothèque "prompt-sync" pour demander des entrées à l'utilisateur et la bibliothèque "child_process" pour exécuter des commandes système. 
Le but est de créer un environnement similaire à celui d'un terminal.

La première partie du code affiche un message de bienvenue dans la console. 
Ensuite, la bibliothèque "prompt-sync" est importée pour demander à l'utilisateur d'entrer une commande.

Une variable nommée "commande" est déclarée pour stocker la commande entrée par l'utilisateur.
Ensuite, une boucle do-while est utilisée pour permettre à l'utilisateur de continuer à entrer des commandes.
Pour chaque entrée, le code vérifie si la commande est "ls -la", "ls", "pwd", "cat", "echo" ou "exit".
Si c’est le cas , la bibliothèque "child_process" est importée et la commande est exécutée à l'aide de la fonction execSync.
Le résultat de la commande est converti en chaîne et affiché dans la console.

Si la commande est "exit", la boucle se termine et le shell est fermé.
Dans le cas où aucune des commandes précédentes n'est entrée, le message "error !" est affiché dans la console


Pour la realisation de ce projet, nous avons lu les chapitres 1 à 5 du livre ElOQUENT JAVASCRIPT de Marijin Harverbeke et
nous avons compléter notre apprentissage par des cours trouvés sur le net.

