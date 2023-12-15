const btnnnnn = document.querySelector('.btnnnnn');
        const statuses = [
            { text: 'Inactive', colorClass: 'inactive' },
            { text: 'Reset', colorClass: 'reset' },
            { text: 'Active', colorClass: 'active' },
        ];
        let currentIndex = 0;

        btnnnnn.addEventListener('click', () => {
            btnnnnn.textContent = statuses[currentIndex].text;

            btnnnnn.classList.remove('active', 'inactive', 'reset');
            btnnnnn.classList.add(statuses[currentIndex].colorClass);

            currentIndex = (currentIndex + 1) % statuses.length;
        });