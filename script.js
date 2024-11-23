"use strict";
const hoverButton = document.getElementById('toggle-skills');
const skills = document.getElementById('skills');
hoverButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
