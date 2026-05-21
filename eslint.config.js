import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser, // Indique que le code tourne dans un navigateur (accès à window, document, etc.)
                ...globals.jquery   // Autorise l'utilisation de jQuery ($) vu dans le code de départ
            }
        },
        rules: {
            "no-unused-vars": "warn",      // Alerte si une variable est créée mais jamais utilisée
            "no-console": "off",           // Autorise les console.log pour les étudiants
            "semi": ["error", "always"],   // Oblige à mettre des points-virgules en fin de ligne
            "eqeqeq": "error"              // Force l'utilisation de === au lieu de ==
        }
    }
];