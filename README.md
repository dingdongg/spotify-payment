# Schedule

We wanna try to aim to finish a feature every 2 weeks. 

# Figma
**frontend**
https://www.figma.com/file/aJdnX6kEbNEPUZMXZBr1UH/Spotify-tracker-app?node-id=0%3A1 
**backend**
https://www.figma.com/file/hpqsg031qhNdgGlSqk5PDD/Backend-Figma?node-id=0%3A1&t=y8MQcNSd9CTycxXq-0 
**Meetings**

Meeting every saturday at 1-2pm.

**Milestone 1 (due 29/10/2022)**

1.  Layout of the website (css)
2.  Infrastructure
3.  Stub event listeners


**Milestone 2 (due 12/11/2022)**

1.  Filters for history page
2.  Routing for member home and admin home
3.  Remove and Add members
4.  Stub countdown feature
5.  Dropdown for header

**Milestone 3 (due 26/11/2022)**

1.  Implement Database (MongoDB)
2.  Hooking it up with the back end

**Milestone 4 (due 10/12/2022)**

1.  Login Feature
2.  Restricting access to certain people

**Milestone 5 (due 7/1/2023)**
 
1.  Implement Google Pay 

**Milestone 6 (due 21/1/2023)**

1.  Email admin once a payment is made
2.  Monthly reminders
3.  Confirmation for admin
4.  Confirmation email for members after payment goes through

**Final Milestone (due date: uknown)**

1. Push it as a Mobile App.


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
* Implement google pay
* Request a payment verification (plan member)
* Approve a payment verification (plan manager)
* Update list of payments based on verifications
* Display list of payments
    * structure similar to that on Google Docs

---

## **Optional Features**
### Email
* send payment reminders via email
* different look to admin page

---

## **Developing**
`main` will be used as the production branch. We should only be adding code to the `main` branch by merging in feature branches.

### Feature Branches
When creating/editing a feature, open a new branch. Any name will do, but it should be intuitive and easy to understand. For example, `feature/add-member` is good.

Once the feature is implemented, open a pull request for that branch. The other person will review it and decide if it's good to be merged in, or request changes to be made.
