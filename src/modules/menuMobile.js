 const menuMobile = () => {
    const btn = document.getElementById('navigation');
    const mobileMenu = btn.querySelector('.navbar-collapse');

    btn.addEventListener('click', (e) => {
        if (e.target.closest('.collapsed')) 
        {
           mobileMenu.classList.toggle('collapse');
        } 
        else if (mobileMenu.classList.contains('collapse') && !e.target.classList.contains('navbar-collapse')) 
        {
            mobileMenu.classList.remove('collapse');
        }
        
    });
};
export default menuMobile