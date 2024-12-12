document.addEventListener('DOMContentLoaded', () => {
    const captchaContainer = document.getElementById('captchaTable');
    const userInput = document.getElementById('captchaInput');
    const refreshButton = document.getElementById('resetButton');
    const checkButton = document.getElementById('verifyButton');
    const feedbackMessage = document.getElementById('resultMessage');

    createCaptcha();

    refreshButton.addEventListener('click', () => {
        createCaptcha();
        feedbackMessage.textContent = '';
    });

    checkButton.addEventListener('click', () => {
        const userText = userInput.value.trim().toLowerCase();
        const generatedText = captchaContainer.dataset.captcha.trim().toLowerCase();

        if (userText === generatedText) {
            feedbackMessage.textContent = 'AHOY! YOU ARE A HUMAN';
            feedbackMessage.classList.remove('text-red-500');
            feedbackMessage.classList.add('text-green-500');
        } else {
            feedbackMessage.textContent = 'ARE YOU ARRPHEUS ?';
            feedbackMessage.classList.remove('text-green-500');
            feedbackMessage.classList.add('text-red-500');
        }

        userInput.value = '';
        createCaptcha();
    });

    function getRandomString(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    function createCaptcha() {
        const captchaCode = getRandomString(6);
        captchaContainer.dataset.captcha = captchaCode;
        captchaContainer.innerHTML = '';
        for (let char of captchaCode) {
            const cell = document.createElement('div');
            cell.textContent = char;
            cell.classList.add('text-3xl', 'font-semibold', 'w-16', 'h-16', 'flex', 'items-center', 'justify-center', 'border', 'border-gray-300', 'bg-gray-100');
            captchaContainer.appendChild(cell);
        }
    }
});