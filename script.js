
document.addEventListener('DOMContentLoaded', function() {
    // Alert when the page loads
    alert("Welcome to Zomato Clone!");

    // Handling form submission for ratings and reviews
    const form = document.getElementById('review-form');
    const reviewsList = document.getElementById('reviews-list');

    // Load existing reviews from localStorage
    loadReviews();

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const rating = document.getElementById('rating').value;
        const reviewText = document.getElementById('review').value;

        if (rating && reviewText) {
            const review = {
                rating: rating,
                text: reviewText,
                date: new Date().toLocaleDateString()
            };
            
            saveReview(review);
            displayReview(review);

            // Clear the form
            form.reset();
        }
    });

    function saveReview(review) {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    function loadReviews() {
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.forEach(review => displayReview(review));
    }

    function displayReview(review) {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <p><strong>Rating:</strong> ${review.rating} Stars</p>
            <p><strong>Review:</strong> ${review.text}</p>
            <p><strong>Date:</strong> ${review.date}</p>
        `;
        reviewsList.appendChild(reviewElement);
    }
});
