import js from "@eslint/js";
import globals from "globals";
import playwright from "eslint-plugin-playwright";

export default [
    js.configs.recommended,
    {
        files: ["**/*.js", "**/*.mjs"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
        plugins: {
            playwright,
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error",
            "playwright/no-conditional-in-test": "warn",
            "playwright/no-duplicate-hooks": "error",
            "playwright/no-skipped-test": "warn",
            "playwright/no-focused-test": "warn",
        },
    },
    {
        //apply stricter linting just for test files
        files: ["tests/**/*.spec.js", "tests/**/*.test.js"],
        rules: {
            "playwright/expect-expect": "error", //enforce `expect` in tests
        },
    },
];