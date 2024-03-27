document.addEventListener('DOMContentLoaded', function() {
    let counterElement = document.getElementById('infinity');
    if (counterElement) {
        let count = 0;
        setInterval(function() {
            count++;
            counterElement.innerText = count;
        }, 1000); // Update the count every 1000 milliseconds (1 second)
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Counter Animation
window.onload = function() {
    let counterElement = document.getElementById('infinity');
    if (counterElement) {
        let count = 0;
        setInterval(() => {
            count++;
            animateCounter(count, counterElement);
        }, 1000);
    }
};

function animateCounter(count, element) {
    let currentCount = parseInt(element.innerText);
    let duration = 200; // Duration in milliseconds
    let stepTime = duration / Math.abs(count - currentCount);
    let timer = setInterval(() => {
        currentCount += (count > currentCount) ? 1 : -1;
        element.innerText = currentCount;
        if (currentCount === count) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('nav-transparent');
    } else {
        nav.classList.remove('nav-transparent');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let countdownTimer = setInterval(function() {
        let timer = document.getElementById("time");
        let time = timer.innerHTML.split(':');
        let minutes = parseInt(time[0]);
        let seconds = parseInt(time[1]);
        
        if (seconds == 0) {
            if (minutes == 0) {
                clearInterval(countdownTimer);
                document.getElementById("timer").innerHTML = "<p>Time's up! Please send your message now.</p>";
                return;
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        
        timer.innerHTML = (minutes < 10 ? "0" : "") + String(minutes) + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    }, 1000);
});
