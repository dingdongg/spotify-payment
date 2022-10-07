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
When creating/editing a feature, open a new branch. Any name will do, but it should be intuitive and easy to understand. 

Once the feature is implemented, open a pull request for that branch. The other person will review it and decide if it's good to be merged in, or request changes to be made.