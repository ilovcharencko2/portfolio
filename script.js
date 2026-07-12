// Ждем загрузки DOM
document.addEventListener("DOMContentLoaded", (event) => {
    // Используем GSAP для плавного появления всех секций с классом animate-item
    gsap.from(".animate-item", {
        y: 30,           // Элементы выезжают снизу (на 30px)
        opacity: 0,      // Начинают с нулевой прозрачности
        duration: 0.8,   // Длительность анимации для каждого элемента
        stagger: 0.2,    // Задержка между появлениями элементов
        ease: "power2.out" // Плавное замедление в конце
    });
});