// Menentukan elemen menu dan navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Pastikan elemen-elemen ada sebelum menambahkan event listener
if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        // Menambahkan atau menghapus kelas 'bx-x' pada menu icon
        menuIcon.classList.toggle('bx-x');
        
        // Menambahkan atau menghapus kelas 'active' pada navbar
        navbar.classList.toggle('active');
    });
}
