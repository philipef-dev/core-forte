   const scrollUpBtn = document.getElementById('scroll-up');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollUpBtn.classList.remove('opacity-0', 'pointer-events-none');
        } else {
            scrollUpBtn.classList.add('opacity-0', 'pointer-events-none');
        }
    });

    scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
