import globals from "globals";
import jsPlugin from "@eslint/js";
import { ESLint } from "eslint";  // Para el plugin de TypeScript
import prettierConfig from "eslint-config-prettier";

// Exportamos una configuración correcta de ESLint
export default [
  {
    // Archivos a los que se aplica
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.browser,  // Definimos los globals del navegador
    },
    // Extendemos las configuraciones recomendadas de los plugins
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",  // Configuración de TypeScript
      "plugin:prettier/recommended",  // Prettier integrado con ESLint
    ],
    plugins: {
      "@typescript-eslint": tseslint,
      "prettier": prettierConfig,
    },
    rules: {
      // Aquí se pueden agregar reglas adicionales si lo necesitas
      "prettier/prettier": "error", // Hace que los errores de Prettier aparezcan como errores de ESLint
    }
  }
];
