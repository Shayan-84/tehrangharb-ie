// فعال کردن و غیرفعال کردن منوی همبرگری
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active'); // فعال و غیرفعال کردن منو
  menuIcon.classList.toggle('active'); // فعال‌سازی انیمیشن همبرگر
});
