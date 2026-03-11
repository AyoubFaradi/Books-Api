# 📚 Books API – Version 2

## 📌 Description

Books API est une API REST développée avec **Node.js, Express et MongoDB** permettant de gérer une base de données de livres.

L’API permet de :

* Ajouter un livre
* Voir la liste des livres
* Consulter un livre par ID
* Modifier un livre
* Supprimer un livre

Le projet suit l’architecture **MVC (Model – View – Controller)**.

---

# 🛠️ Technologies utilisées

* Node.js
* Express.js
* MongoDB
* Mongoose
* Dotenv
* Cors

---

# 📁 Structure du projet

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
git clone https://github.com/abdellatif-hub/Books-API.git
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

## 📖 Books

### 🔹 Get all books

```
GET /books
```

📷 Screenshot :

```
[INSERER SCREENSHOT ICI]
```

---

### 🔹 Get book by ID

```
GET /books/:id
```

📷 Screenshot :

```
[INSERER SCREENSHOT ICI]
```

---

### 🔹 Create book

```
POST /books
```

Body :

```json
{
"title": "Clean Code",
"author": "Robert Martin",
"price": 40,
"category": "Programming"
}
```

📷 Screenshot :

```
[INSERER SCREENSHOT ICI]
```

---

### 🔹 Update book

```
PUT /books/:id
```

📷 Screenshot :

```
[INSERER SCREENSHOT ICI]
```

---

### 🔹 Delete book

```
DELETE /books/:id
```

📷 Screenshot :

```
[INSERER SCREENSHOT ICI]
```

---

# 🗄️ Base de données MongoDB

Nom de la base :

```
books_db
```

Collection :

```
books
```

📷 Screenshot MongoDB Compass :

```
[INSERER SCREENSHOT BASE DE DONNEES]
```

---

# Tests API

Les tests peuvent être réalisés avec :

* Postman
* Thunder Client (VS Code)
* curl

📷 Screenshot Postman :

```
[INSERER SCREENSHOT TEST API]
```

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
