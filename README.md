Mon Premier Projet Web
Bienvenue dans mon projet de site web en HTML, CSS et JavaScript.
Ce projet est aussi une introduction à Git et GitHub avec des branches bien organisées.

Objectif du projet WEB
Créer un site web simple avec :

Une page d'accueil (index.html)
Du style (style.css)
Des actions avec JavaScript (script.js)


Branches utilisées
main : version finale du projet
dev : pour ajouter plusieurs fonctionnalités
test : pour tester les fonctionnalités
feature/nom : pour chaque nouvelle fonctionnalité

Sauvegarder les changements

git add .
git commit -m "Ajout de ma fonctionnalité"
git push origin feature/ma-fonction
Fusionner dans test, puis dans dev, puis dans main une fois validé.


Commandes utiles
Action	Commande
Voir les fichiers modifiés	git status
Sauvegarder les changements	git add . + git commit -m "..."
Changer de branche	git checkout nom-branche
Créer une branche	git checkout -b nom-branche
Envoyer sur GitHub	git push origin nom-branche
Dossier du projet


projet-web/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js



 Commandes Git utilisées dans ce projet
git init
git add .
git commit -m "Premier commit au projet"
git branch -M main
git remote add origin https://github.com/Death882004/Nkono-ebong-louis.git
git push -u origin main
git checkout -b dev main
git merge test
git push -u origin dev
git checkout -b test
git push -u origin test
git checkout -b feature/index.html
git add .
git commit -m "Ajout de la page index.html"
git checkout -b feature/style.css
git commit -m "Ajout de la page style.css"
git push origin feature/index.html
git push origin feature/style.css
git checkout -b feature/script.js
git commit -m "Ajout de la page script.js"
git push origin feature/script.js
git checkout test
git merge feature/index.html
git merge feature/style.css
git merge feature/script.js
git push origin test
git checkout dev
git merge test
git push origin dev
git checkout -b feature/html
git add index.html
git commit -m "ajout de l'index.html dans la branche feature/html"
git push -u origin feature/html
git checkout test
git merge feature/index.html
git push origin test
git pull
git fetch
git checkout dev
git pull origin dev
git pull origin feature/index.html
git add .
git commit -m "Résolution de conflit"
git log
git checkout test
git pull origin test
git add .
git commit -m " 2 Résolution des conflits 2 "
git status
git push
git checkout main
git merge dev
git push origin main

Réalisé par


Nom : [NKONO EBONG LOUIS CHARLES]


Classe : Étudiant en 1ère année de licence en keyce informatique et intelligence articielle.
