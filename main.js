window.onload = () => {
    const startButton = document.getElementById('startButton');
    const content = document.getElementById('content');

    startButton.addEventListener('click', () => {
        document.body.classList.remove("container");
        content.style.display = 'block'; // Show the content
        startButton.style.display = 'none'; // Hide the button
    });
};
