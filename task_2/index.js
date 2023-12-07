var button = document.getElementById('statusButton');
var statuses = ['active', 'inactive', 'pending'];
var currentStatusIndex = 0;

function changeStatus() {
    currentStatusIndex = (currentStatusIndex + 1) % statuses.length;
    var newStatus = statuses[currentStatusIndex];

    button.classList.remove(...statuses);
    button.classList.add(newStatus);
}
