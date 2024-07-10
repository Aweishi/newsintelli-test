import "./assets/css/main.css";
import "./assets/css/base.css";
import "./assets/css/aside.css";


document.querySelector('#btn-down').addEventListener('click', function() {
    const icon = this.querySelector('.icon');
    const isExpanded = this.getAttribute('aria-expanded') === 'false';
    
    // Toggle the aria-expanded attribute
    this.setAttribute('aria-expanded', !isExpanded);

    // Toggle the content visibility and icon rotation
    if (!isExpanded) {
        icon.classList.add('rotated');
    } else {
        icon.classList.remove('rotated');
    }
});

