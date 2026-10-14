'use strict';

const userGreeting = document.getElementById('greeting-title');
const userInput = document.getElementById('username-input');
const saveBtn = document.getElementById('save-name-btn');
const clearBtn = document.getElementById('reset-btn');
const obsidianBtn = document.getElementById('obsidian-btn');
const violetBtn = document.getElementById('violet-btn');

saveBtn.addEventListener('click', () => {
    const enteredName = userInput.value.trim();
    if ('' !== enteredName) {
        localStorage.setItem('userName', enteredName);
        userGreeting.textContent = `Welcome, ${enteredName}`;
        userInput.value = '';
    }
})

clearBtn.addEventListener('click', () => {
    localStorage.removeItem('userName');
    userGreeting.textContent = `Welcome, Operative`;
})

const savedName = localStorage.getItem('userName');
if (savedName) {
    userGreeting.textContent = `Welcome, ${savedName}`;
}


violetBtn.addEventListener('click', () => {
    document.body.dataset.theme = 'neon-violet';
    localStorage.setItem('appTheme', 'neon-violet');
})

obsidianBtn.addEventListener('click', () => {
    document.body.dataset.theme = 'obsidian';
    localStorage.setItem('appTheme', 'obsidian');
})

const savedAppTheme = localStorage.getItem('appTheme');
if (savedAppTheme) {
    document.body.dataset.theme = savedAppTheme;
}