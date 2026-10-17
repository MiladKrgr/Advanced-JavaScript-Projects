'use strict';

/* ==========================================================================
   DOM Elements Selection
   ========================================================================== */
const userGreeting = document.getElementById('greeting-title');
const userInput = document.getElementById('username-input');
const saveBtn = document.getElementById('save-name-btn');
const clearBtn = document.getElementById('reset-btn');
const obsidianBtn = document.getElementById('obsidian-btn');
const violetBtn = document.getElementById('violet-btn');

// Default fallback values
const DEFAULT_GREETING = 'Welcome, Operative';

/* ==========================================================================
   State Initialization (Load Cached Data on Page Load)
   ========================================================================== */
// Retrieve stored user preferences from localStorage
const savedName = localStorage.getItem('userName');
const savedAppTheme = localStorage.getItem('appTheme');

// Restore username if exists
if (savedName) {
    userGreeting.textContent = `Welcome, ${savedName}`;
}

// Restore theme preference if exists
if (savedAppTheme) {
    document.body.dataset.theme = savedAppTheme;
}

/* ==========================================================================
   Event Handlers: Username Management
   ========================================================================== */
// Save username to localStorage and update UI
saveBtn.addEventListener('click', () => {
    const enteredName = userInput.value.trim();

    // Prevent saving empty or whitespace-only strings
    if (enteredName !== '') {
        localStorage.setItem('userName', enteredName);
        userGreeting.textContent = `Welcome, ${enteredName}`;
        userInput.value = ''; // Clear input field after successful save
    }
});

/* ==========================================================================
   Event Handlers: Theme Management
   ========================================================================== */
// Switch and persist 'neon-violet' theme
violetBtn.addEventListener('click', () => {
    document.body.dataset.theme = 'neon-violet';
    localStorage.setItem('appTheme', 'neon-violet');
});

// Switch and persist 'obsidian' theme
obsidianBtn.addEventListener('click', () => {
    document.body.dataset.theme = 'obsidian';
    localStorage.setItem('appTheme', 'obsidian');
});

/* ==========================================================================
   Event Handlers: Reset / Cache Invalidation
   ========================================================================== */
// Reset all cached data and restore default UI state
clearBtn.addEventListener('click', () => {
    // 1. Remove specific keys from localStorage (or use localStorage.clear() if full wipe is intended)
    localStorage.removeItem('userName');
    localStorage.removeItem('appTheme');

    // 2. Restore UI elements back to default state
    userGreeting.textContent = DEFAULT_GREETING;
    userInput.value = ''; // Ensure the input field is emptied
    delete document.body.dataset.theme; // Remove custom theme attribute to revert to default styling
});
