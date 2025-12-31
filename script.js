let enteredCode = "";
const correctCode = "123"; // Set your passcode here

function pressKey(num) {
    enteredCode += num;
    updateDots();

    if (enteredCode.length === 3) {
        if (enteredCode === correctCode) {
            document.getElementById('status-text').innerText = "Welcome!";
            setTimeout(() => {
                document.getElementById('login-screen').classList.add('hidden');
                document.getElementById('gift-content').classList.remove('hidden');
            }, 500);
        } else {
            document.getElementById('status-text').innerText = "Wrong Code!";
            enteredCode = ""; 
            setTimeout(() => {
                document.getElementById('status-text').innerText = "Enter Passcode";
                updateDots();
            }, 1000);
        }
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index < enteredCode.length) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function showSection(section) {
    const display = document.getElementById('section-display');
    if (section === 'profile') {
        display.innerHTML = "<h3>About You</h3><p>You are the most amazing person!</p>";
    } else if (section === 'gallery') {
        display.innerHTML = "<h3>Our Memories</h3><img src='https://via.placeholder.com/150' style='width:100%'>";
    } else if (section === 'message') {
        display.innerHTML = "<h3>Letter</h3><p>Wishing you the best year ever!</p>";
    }
}
