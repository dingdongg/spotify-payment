# spotify-payment

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Spotify Payment Logger

## **Description**
This web app automates spotify premium payments - no more manual logging on Google Docs.

---

## **How it Works**
### Creating a plan
1. Plan manager creates a plan
2. Plan manager adds members to plan

### Payments
1. Member logs in
2. Member requests a payment verification, plan manager is notified
3. Manager reviews payment verification, and approve/rejects it
4. Update payment display based on step 3

---

## **Core Features to Implement**
### Plan
* Create a plan
* Log in to existing plan

### Members
* Add members to plan
* Remove members from plan
* Login as a member

### Payments
* Request a payment verification (plan member)
* Approve a payment verification (plan manager)
* Update list of payments based on verifications
* Display list of payments
    * structure similar to that on Google Docs

---

## **Optional Features**
### Email
* send payment reminders via email

---

## **Developing**
`main` will be used as the production branch. We should only be adding code to the `main` branch by merging in feature branches.

### Feature Branches
When creating/editing a feature, open a new branch. Any name will do, but it should be intuitive and easy to understand. For example, `feature/add-member` is good.

Once the feature is implemented, open a pull request for that branch. The other person will review it and decide if it's good to be merged in, or request changes to be made.
