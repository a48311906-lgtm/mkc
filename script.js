let enteredCode = "";
const correctCode = "1234"; // CHANGE YOUR PASSCODE HERE

function pressKey(num) {
    if (enteredCode.length < 4) {
        enteredCode += num;
        updateDots();
    }

    if (enteredCode.length === 4) {
        if (enteredCode === correctCode) {
            // Play Music
            const music = document.getElementById('bg-music');
            music.play();

            document.getElementById('status-text').innerText = "Access Granted ❤️";
            
            setTimeout(() => {
                document.getElementById('login-screen').classList.add('hidden');
                document.getElementById('gift-content').classList.remove('hidden');
            }, 600);
        } else {
            document.getElementById('status-text').innerText = "Try Again!";
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
    display.innerHTML = ""; // Clear current
    
    let content = "";

    if (section === 'profile') {
        content = `
            <div class="fade-in">
                <img src="profile.jpg" class="circle-img">
                <h3>My Love</h3>
                <p>"Happpy new year love, this is starting with you is the best thing happen in thst year. Miles can't keep us apart because you're always in my heart."</p>
                <p><b>i hope we stay together </b> my onlyyyy baby</p>
            </div>
        `;
    } else if (section === 'gallery') {
        content = `
            <div class="fade-in">
                <h3>Favorite Moments</h3>
                <img src="memory.jpg" style="width:100%; border-radius:15px;">
                <p>Missing this day with you!</p>
                <button class="collect-btn" onclick="alert('Hug Collected! 🤗')">Collect Hug</button>
            </div>
        `;
    } else if (section === 'message') {
        content = `
            <div class="fade-in letter-box">
                <p>Dear You,</p>
                <p>I know the distance is hard, but you are the best thing that ever happened to me. Thank you for every late-night waiting for me and for being my favorite person on this earth. i dont know what future we hold but i love youuu my angle little DIA</p>
                <p>I love you more than every mile between us. ❤️</p>
            </div>
        `;
    }

    display.innerHTML = content;
}
