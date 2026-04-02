//Funcionalidades
// Armazenar perfil ativo no localStorage


document.addEventListener('DOMContentLoaded', () => {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        profile.addEventListener('click', (e) => {
            const img = profile.querySelector('img');
            const name = profile.querySelector('figcaption').textContent;

            if (img && name) {
                localStorage.setItem('perfilAtivoNome', name);
                localStorage.setItem('perfilAtivoImagem', img.src);
            }
        });
    });
});