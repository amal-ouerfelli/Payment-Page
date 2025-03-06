# Page de Paiement avec Next.js & Stripe

## Description
Ce projet est une page de paiement **responsive** développée avec **Next.js**, **React.js**, **Bootstrap** et **Stripe API** en mode test.  
Il permet aux utilisateurs d'entrer leurs coordonnées et leurs informations de paiement et de simuler un achat via **Stripe Checkout**.

---

## Technologies utilisées
- **Next.js** – Framework React pour le rendu côté serveur (SSR) et les API routes  
- **React.js** – Gestion des composants  
- **Bootstrap** – Mise en page responsive  
- **Stripe API** – Gestion des paiements en mode test  

---

## Installation et Configuration

### 1. Cloner le projet
```bash
git clone https://github.com/amal-ouerfelli/Payment-Page.git
```
### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer les variables d'environnement
Crée un fichier .env à la racine et ajoute les clés Stripe :

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key
```
Remplace your_publishable_key et your_secret_key par tes vraies clés Stripe (mode test).

## Lancer le projet en local
```bash
npm run dev
```
Puis ouvre http://localhost:3000/checkout dans le navigateur.

## Test du Paiement
1. Utiliser une carte test Stripe (ex : 4242 4242 4242 4242 avec une date future et un CVC aléatoire).
2. Vérifier que la transaction est bien enregistrée dans le dashboard Stripe.

## Améliorations possibles
1. Ajouter une page de confirmation après le paiement
2. Ajouter des moyens de paiement alternatifs (PayPal, Google Pay, Apple Pay...)
3. Gestion améliorée des erreurs : Messages clairs et informatifs pour les utilisateurs en cas de problème ou des erreurs de saisie





