# Site de l'association de poker **4As-t-us**  
## Bienvenu à tous les amoureux de poker  
Ce site est le site web de présentation de **l'association '4As-t-us'**.  
Cette association qui est pour le moment fictive, désolais, aurait pu noter : 
"L'association vous attend pour d'agréables moments.  
Votre adhésion sera le prétexte pour jouer au poker, jouer entre amis, tournois, gains, cadeaux, etc."  
  
## Pour la visite et naviguer sur le site  
Rien à faire de plus, juste le plaisir de le visiter. Bonne visite!  
  
## Pour les Dev

Bonne lecture et merci de vos remontées d'informations et/ou solutions.

### Infos
- Pour des raisons de conflits entre Sass et @11ty/eleventy, certaines mises-à-jour de .SCSS. ne sont pas 
  automatiquement pris en compte malgré les watchers des 2 plugins. Et pour observer ces mises-à-jour sur 
  le serveur local, je réalise une petite manipulation, c'est-à-dire : je fais une modif fictive.  
  (ex: Tout en ayant "Sass watch" et "eleventy --serve" en fonction, après avoir fait des modif de style,
  je me rend dans le fichier src/style.scss puis on fait un simple espace que l'on supprime et on enregistre.
  Cela aura pour effet d'appliquer les styles.
- Réaliser régulièrement : 
    - "npm run start" : Pour écouter et réaliser les modifs dans les fichiers src et à la racine.
    - "Ctrl + c puis o" : Pour stopper l'écoute.
- Lorsque les modifs sont réalisées et l'écoute stoppée, passer les fichiers en production :
    - "npm run build" : Pour passer les fichiers modifiés nécessaires en production.
  
### Editeur de code utilisé  
- **Visual Code Studio**
  
### Adresse code source  
- https://github.com/SoiFranc/4As-t-us

### Modules & packages nécessaires  
La majorité des packages sont caractérisés dans le fichier package.json  
  
#### Installation par ligne de commande  
- **Préprocesseur Sass** : 
Au terminal en ligne de commande : "npm -g install sass" 
  
#### Installation via site MarketPlace (avec ou sans téléchargement)  
- Installer extension **Dart Sass Compiler and Sass watcher** : 
  - Avec **visual Studio Code**, outil d'extensions (Ctrl+Maj+X), chercher et installer : "DartJS Sass Compiler and Sass Watcher"  
**ou**  
  - Cliquez sur ce lien : [[Dart Sass Compiler and Sass watcher]](https://marketplace.visualstudio.com/items?itemName=codelios.dartsass)  
      
- Installer extension **Markdown All in One** :  
  - Avec visual Studio Code, outil d'extensions (Ctrl+Maj+X), chercher et installer : "Markdown"  
**ou**  
  - Cliquez sur ce lien : [[Markdown All in One]](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)  
  
- Installer extension **Markdown Preview Enhanced** : 
  - Avec visual Studio Code, outil d'extensions (Ctrl+Maj+X), chercher et installer : "Markdown"  
  **ou**  
  - Cliquez sur ce lien : [[Markdown Preview Enhanced]](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)  
  
- Installer extension **nunjucks-template** : 
  - Avec visual Studio Code, outil d'extensions (Ctrl+Maj+X), chercher et installer : "njk"  
  **ou**  
  - Cliquez sur ce lien : [[nunjucks-template]](https://marketplace.visualstudio.com/items?itemName=eseom.nunjucks-template)  
