# Documentation
See <a href='https://github.com/Flo-Slv/Monopoly/wiki'>Wiki</a>
---
<br />

# Initialisation du project et installation des dependances
A titre d'information, voici la facon dont le projet a ete cree
```sh
npx create-next-app monopoly
```
```sh
npm i graphql @apollo/client apollo-server-micro mongoose
```
<br />

#### Creation de la structure et des fichiers necessaires
Dossier `backend` a la racine.

A l'interieur du dossier `backend` :
- backend/graphql/resolvers/
- backend/graphql/mutations/
- backend/graphql/queries/
- backend/graphql/typeDefs.js
- backend/db/models/
- backend/db/config/
- backend/utils/

Supprimer le fichier `api/hello.js` et creer un fichier `api/graphql.js`.
