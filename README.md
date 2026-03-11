# Books API – Version

## Description

Books API est une API REST développée avec **Node.js, Express et MongoDB** permettant de gérer une base de données de livres.

L’API permet de :

* Ajouter un livre
* Voir la liste des livres
* Consulter un livre par ID
* Modifier un livre
* Supprimer un livre

Le projet suit l’architecture **MVC (Model – View – Controller)**.

---

# Technologies utilisées

* Node.js
* Express.js
* MongoDB
* Mongoose
* Dotenv
* Cors

---

# Structure du projet

```
books-api
│
├── controllers
│   └── bookController.js
│
├── models
│   ├── bookModel.js
│   ├── categoryModel.js
│   ├── clientModel.js
│   ├── orderItemModel.js
│   └── orderModel.js
│
├── routes
│   └── bookRoutes.js
│
├── .env
├── package.json
└── server.js
```

---

# ⚙️ Installation

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/AyoubFaradi/Books-API.git
```

### 2️⃣ Installer les dépendances

```bash
npm install
```

### 3️⃣ Configurer les variables d’environnement

Créer un fichier `.env` :

```
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/books_db
```

### 4️⃣ Lancer le serveur

```bash
npm run dev
```

Serveur disponible sur :

```
http://localhost:3000
```

---

# 🔗 Endpoints API

## Books

### 🔹 Get all books

```
GET /books
```

Screenshot :

```
<img width="1827" height="960" alt="image" src="https://github.com/user-attachments/assets/7425aea7-b2a8-45fc-915d-0b26e00f7c44" />
```

---

### 🔹 Get book by ID

```
GET /books/:id
```

Screenshot :

```
<img width="1919" height="945" alt="image" src="https://github.com/user-attachments/assets/05218238-e66d-4154-8470-7193e5556ccf" />
```

---

### 🔹 Create book

```
POST /books
```

Body :

```json
{
"title": "React Js",
"author": "Abderahman gamal",
"price": 220,
"category": "Programming"
}
```

Screenshot :

```
<img width="1828" height="971" alt="image" src="https://github.com/user-attachments/assets/a8ef3413-7258-41a4-bdee-ef32b6bc7a74" />
```

---

### 🔹 Update book

```
PUT /books/:id
```

Screenshot :

```
<img width="1831" height="971" alt="image" src="https://github.com/user-attachments/assets/cd1a11b3-3e73-4425-a6ca-103edd60c9b7" />
```

---

### 🔹 Delete book

```
DELETE /books/:id
```

Screenshot :

```
<img width="1833" height="973" alt="image" src="https://github.com/user-attachments/assets/835de94b-5fc0-493a-841e-92ee75f961a1" />
```

---

# Base de données MongoDB

Nom de la base :

```
books_db
```

Collection :

```
books
```

Screenshot MongoDB Compass :

```
<img width="1771" height="1007" alt="image" src="https://github.com/user-attachments/assets/5e899db6-d516-43e1-91a9-5056e32b013f" />
```

---

# Tests API

Les tests peuvent être réalisés avec :

* Postman
* Thunder Client (VS Code)
* curl

---

# Améliorations possibles

* Ajouter une gestion des **catégories**
* Ajouter un système de **clients**
* Ajouter une gestion des **commandes (orders)**
* Ajouter une **authentification JWT**
* Ajouter Swagger pour la documentation API

---

# Auteur

**Ayoub Faradi**

Projet réalisé dans le cadre d’apprentissage du développement **Backend avec Node.js et MongoDB**.

---
