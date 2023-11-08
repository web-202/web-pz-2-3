const button = document.querySelector('.btn');
        const statuses = [
            { text: 'Active', colorClass: 'active' },
            { text: 'Inactive', colorClass: 'inactive' },
            { text: 'Reset', colorClass: 'reset' }
        ];
        let currentIndex = 0;

        button.addEventListener('click', () => {
            button.textContent = statuses[currentIndex].text;

            button.classList.remove('active', 'inactive', 'reset');
            button.classList.add(statuses[currentIndex].colorClass);

            currentIndex = (currentIndex + 1) % statuses.length;
        });