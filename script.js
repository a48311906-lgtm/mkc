let enteredCode = "";
const correctCode = "1234"; // Set your custom 4-digit passcode here

function pressKey(num) {
    if (enteredCode.length < 4) {
        enteredCode += num;
        updateDots();
    }

    if (enteredCode.length === 4) {
        if (enteredCode === correctCode) {
            document.getElementById('status-text').innerText = "Access Granted ❤️";
            setTimeout(() => {
                document.getElementById('login-screen').classList.add('hidden');
                document.getElementById('gift-content').classList.remove('hidden');
            }, 600);
        } else {
            document.getElementById('status-text').innerText = "Wrong Passcode!";
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
        dot.classList.toggle('active', index < enteredCode.length);
    });
}

function showSection(section) {
    const display = document.getElementById('section-display');
    display.classList.remove('fade-in');
    
    // Brief timeout to re-trigger animation
    setTimeout(() => {
        if (section === 'profile') {
            display.innerHTML = `
                <div class="content-card">
                    <img src="your-photo.jpg" class="circle-img">
                    <h3>My Favorite View</h3>
                    <p>"Distance is just a test to see how far love can travel."</p>
                    <p style="font-size: 0.8rem; color: #888;">Counting every second until we're in the same timezone.</p>
                </div>
            `;
        } 
        else if (section === 'gallery') {
            display.innerHTML = `
                <div class="content-card">
                    <h3>Our Memories</h3>
                    <div class="photo-placeholder">
                        <img src="memory1.jpg" style="width:100%; border-radius:10px; margin-bottom:10px;">
                    </div>
                    <p>I miss your smile more than words can say.</p>
                    <button class="collect-btn" onclick="this.innerText='Virtual Hug Sent! 🫂'">Collect Hug</button>
                </div>
            `;
        } 
        else if (section === 'message') {
            display.innerHTML = `
                <div class="letter-style">
                    <h3>To My Love,</h3>
                    <p>I hate that there are so many miles between us right now, but I love that we are strong enough to handle it. Every flight, every video call, and every "I miss you" text brings us one step closer to the day we never have to say goodbye again.</p>
                    <p>Thank you for being my person, even from across the map. I'm always holding your hand in my heart.</p>
                    <p><b>Always Yours.</b></p>
                </div>
            `;
        }
        display.classList.add('fade-in');
    }, 50);
}
