function login(role) {
    if (role === 'restaurant') {
        window.location.href = 'restaurant.html';
    } else if (role === 'customer') {
        window.location.href = 'customer.html';
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const dishForm = document.getElementById('dish-form');
    const orderForm = document.getElementById('order-form-content');

    if (dishForm) {
        dishForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Dish added successfully!');
        });
    }

    if (orderForm) {
        orderForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Order placed successfully!');
        });
    }
});
