# E-commerce Application Test Automation Project

## 📌 Introduction

This project is an automated testing suite for the e-commerce application [Automation Exercise](https://automationexercise.com/). The tests are written in **JavaScript** using **Cypress** for end-to-end testing.

---

## 📖 Project Overview

This project automates various user flows of the e-commerce platform **Automation Exercise**. The goal is to ensure that key functionalities of the platform (such as **login, product search, cart management, etc.**) work as expected through **end-to-end tests** using **Cypress**.

---

## 🛠 Technologies Used

- **JavaScript** - The programming language used for writing test logic.
- **Cypress** - A modern JavaScript-based framework for end-to-end testing.
- **Mocha & Chai** - Built-in assertion libraries for structuring and verifying test cases.
---

## 📂 Project Structure

```
Cypress-Automation-Exercice/
│-- cypress/
│   ├── e2e/                              # Contains test cases written in JavaScript.
│   ├── fixtures/                         # Contains test data (e.g., JSON files for test inputs).
│   ├── support/                          # Contains custom commands and reusable functions.
│-- Jenkinsfile                           # Jenkins pipeline file
│-- cypress.config.js                     # Cypress configuration file.
│-- package.json                          # Project dependencies and scripts.

```

---

## 🚀 Setup Instructions

### 1️⃣ Clone the repository:
```sh
git clone https://github.com/Montassar90/Cypress-Automation-Exercice.git
```

### 2️⃣ Navigate to the project directory:
```sh
cd Cypress-Automation-Exercice
```

### 3️⃣ Install dependencies:
Make sure you have **Node.js** installed, then run:
```sh
npm install
```

---

## 🏃 Running the Tests

### Run Cypress in headed mode:
```sh
npx cypress open
```
This will launch the Cypress Test Runner, allowing you to run tests interactively.

### Run tests in headless mode:
```sh
npx cypress run
```
This will execute all test cases in the terminal without opening the UI.

---

## 📊 Test Reporting

The project uses Mochawesome for detailed test reporting. After running tests, reports are generated in the cypress/reports directory.

To generate and view the report, run:
```sh
npx cypress run --reporter mochawesome
```
For a merged HTML report:
```sh
npx mochawesome-merge cypress/reports/mocha/*.json -o cypress/reports/mocha/report.json && npx marge cypress/reports/mocha/report.json -o cypress/reports/html
```
You can then open the HTML report from cypress/reports/html/index.html.
---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please create a **pull request** with a detailed description of your changes.

---

### 📩 Contact
For any inquiries or issues, feel free to open an **issue** in the repository.

---

💡 *Happy Testing!* 🛠️🚀

