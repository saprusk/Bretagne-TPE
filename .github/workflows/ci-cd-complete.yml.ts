name: Pipeline CI/CD ÉcoShop Intégral

on:
    push:
        branches: ["**"]
pull_request:
    branches: ["**"]

jobs:
    quality-check:
    name: Contrôle Linter Syntaxique
    runs-on: ubuntu-latest
    steps:
        - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
    with:
     node-version: 20

# This creates a temporary package environment and installs the required plugins
- name: Préparer l'environnement des Linters
run: |
npm install -y


# Validation HTML
- name: Contrôle HTML
run: npx htmlhint "**/*.html"

# Validation CSS (Uncomment when you want to use it)
#      - name: Contrôle CSS
#        run: npx stylelint "**/*.css"

# Validation JavaScript
- name: Contrôle JavaScript
run: npx eslint "**/*.js"

perf-audit:
name: Contrôle des Budgets WebPerf
runs-on: ubuntu-latest
steps:
    - uses: actions/checkout@v4
- name: Serveur local de simulation
run: |
python3 -m http.server 8080 &
sleep 3
- name: Vérification Lighthouse
uses: treosh/lighthouse-ci-action@v12
with:
urls: |
http://localhost:8080/index.html
    budgetPath: ./lighthouse-budget.json
uploadArtifacts: true