document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну відправку

    const statusMessage = document.getElementById('status');
    statusMessage.textContent = 'Sending...';

    const formData = new FormData(this);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            statusMessage.textContent = 'Message sent successfully!';
            statusMessage.style.color = 'green';
            this.reset(); // Очищаємо форму
            setTimeout(() => {
                statusMessage.textContent = '';
            }, 5000); // Прибираємо повідомлення через 5 секунд
        } else {
            statusMessage.textContent = 'Failed to send message. Please try again.';
            statusMessage.style.color = 'red';
        }
    })
    .catch(error => {
        statusMessage.textContent = 'An error occurred. Please try again.';
        statusMessage.style.color = 'red';
    });
});