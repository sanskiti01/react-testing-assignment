## Problem Statement
In large React applications, you often find yourself writing the same logic over and over (like handling form inputs or local storage). **Custom Hooks** allow you to "extract" this logic into a separate function so you can use it in any component.

In this assignment, you will build a persistent User Settings page using two custom hooks: `useToggle` and `useLocalStorage`.

## Files to Edit
*   `src/hooks/useToggle.js`
*   `src/hooks/useLocalStorage.js`
*   `src/App.jsx`

## Tasks

### 1. `useToggle` hook
This is a simple utility hook. It should handle a boolean state and provide a function that flips that state from `true` to `false` (and vice-versa).
*   **Return:** `[state, toggleFunction]`

### 2. `useLocalStorage` hook
This hook synchronizes a React state variable with the browser's `localStorage`.
*   **Initialization:** When the hook starts, it should check if data already exists in `localStorage` for the given key.
*   **JSON:** Remember that `localStorage` only stores strings. Use `JSON.stringify` when saving and `JSON.parse` when reading.
*   **Return:** `[state, setStateFunction]`

### 3. App Integration
Connect these hooks to the `App` component.
*   Use `useToggle` for the Dark Mode feature.
*   Use `useLocalStorage` for the Username field so it persists after a page reload.

## Marks Distribution (Total: 10 Marks)
*   **`useToggle` Logic:** 2 Marks
*   **`useLocalStorage` Init Logic:** 2 Marks
*   **`useLocalStorage` Persistence:** 2 Marks
*   **Theme Integration:** 2 Marks
*   **Input Persistence Integration:** 2 Marks

## Success Tips
*   **Naming:** Always start your hook names with `use` (e.g., `useToggle`). React's linting rules require this.
*   **State Initializer:** In `useLocalStorage`, pass a function to `useState` for the initial value. This is called "Lazy Initialization" and is more efficient for reading from storage.
*   **Destructuring:** When using your hooks in `App.jsx`, use array destructuring: `const [value, setValue] = useLocalStorage(...)`.

## How to Test
1.  **Preview:** Run `vite` and try typing in the name field, then refresh the browser. The name should still be there!
2.  **Tests:** Run `npm run test:serve` to verify your hooks work independently and correctly.