const button = document.querySelector('.button');
        const statuses = [
            { text: 'Inactive', colorClass: 'inactive' },
            { text: 'Reset', colorClass: 'reset' },
            { text: 'Active', colorClass: 'active' },
        ];
        let currentIndex = 0;

        button.addEventListener('click', () => {
            button.textContent = statuses[currentIndex].text;

            button.classList.remove('active', 'inactive', 'reset');
            button.classList.add(statuses[currentIndex].colorClass);

            currentIndex = (currentIndex + 1) % statuses.length;
        });