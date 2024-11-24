document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');

    const startCounting = (counter) => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 200; // Adjust speed by changing the divisor

        const updateCounter = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 15); // Adjust the delay to change the speed
            } else {
                counter.innerText = target; // Ensure the final number matches the target
            }
        };

        updateCounter();
    };

    const observerOptions = {
        threshold: 0.5 // Adjust as needed
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target); // Stop observing after it starts counting
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});