document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const description = this.getAttribute('data-description');
        document.getElementById('movieModalLabel').textContent = title;
        document.querySelector('.modal-body p').textContent = description;
    });
});