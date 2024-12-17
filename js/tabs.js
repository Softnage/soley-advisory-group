document.addEventListener('DOMContentLoaded', function() {
    // Select all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    // Select all tab content sections
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to handle tab switching
    function switchTab(event) {
        // Remove active class from all tab buttons and tab contents
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked tab button
        event.currentTarget.classList.add('active');

        // Get the index of the clicked tab button
        const index = Array.from(tabButtons).indexOf(event.currentTarget);

        // Add active class to the corresponding tab content
        tabContents[index].classList.add('active');
    }

    // Add click event listeners to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });
});




