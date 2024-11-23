const hoverButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

hoverButton.addEventListener('click', () => {
    skills.style.display = skills.style.display === 'none' ? 'block' : 'none';
});
