export const headerScroll = () => {
    const header = document.getElementById('header');
    const textLogo = document.getElementById('text-logo');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 500) {
            header.classList.remove('bg-white', 'bg-opacity-10');
            header.classList.add('bg-black', 'bg-opacity-25');

            textLogo.style.textShadow = '2px 2px 4px lightskyblue';
        }else {
            header.classList.add('bg-white', 'bg-opacity-10');
            header.classList.remove('bg-black', 'bg-opacity-25');

            textLogo.style.textShadow = '';
        }
    });
}