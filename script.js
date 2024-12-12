
    document.addEventListener('DOMContentLoaded', function () {
      const captchaTable = document.getElementById('captchaTable');
      const captchaInput = document.getElementById('captchaInput');
      const refreshButton = document.getElementById('refreshButton');
      const verifyButton = document.getElementById('verifyButton');
      const resultMessage = document.getElementById('resultMessage');

      generateCaptchaTable();

      refreshButton.addEventListener('click', function () {
        generateCaptchaTable();
        resultMessage.textContent = '';
      });

      verifyButton.addEventListener('click', function () {
        const inputText = captchaInput.value.trim().toLowerCase();
        const captchaText = captchaTable.dataset.captcha.trim().toLowerCase();

        if (inputText === captchaText) {
          resultMessage.textContent = 'Captcha verified successfully!';
          resultMessage.classList.remove('text-red-500');
          resultMessage.classList.add('text-green-500');
        } else {
          resultMessage.textContent = 'Incorrect Captcha. Try again!';
          resultMessage.classList.remove('text-green-500');
          resultMessage.classList.add('text-red-500');
        }

        captchaInput.value = '';
        generateCaptchaTable();
      });

      function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      }

      function generateCaptchaTable() {
        const captchaText = generateRandomString(6);
        captchaTable.dataset.captcha = captchaText;
        captchaTable.innerHTML = '';
        for (let i = 0; i < captchaText.length; i++) {
          const cell = document.createElement('div');
          cell.textContent = captchaText.charAt(i);
          cell.classList.add('text-3xl', 'font-semibold', 'w-16', 'h-16', 'flex', 'items-center', 'justify-center', 'border', 'border-gray-300', 'bg-gray-100');
          captchaTable.appendChild(cell);
        }
      }
    });
