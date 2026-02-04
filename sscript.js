const switcher = document.querySelector('.box8');
const themebox = document.querySelector('.box9');
const dropdown = document.getElementById('langdropdown');
const header = dropdown.querySelector('.header');
const list = dropdown.querySelector('.dropdown-list');
const currentLangText = document.getElementById('current-lang');

const triger = document.getElementById('trigger');
const smenu = document.getElementById('show');
const closeeBtn = document.getElementById('close');

// Open the otp menu
triger.addEventListener('click', () => {
  smenu.classList.remove('hidden');
});

// Close the menu via the X icon
closeeBtn.addEventListener('click', () => {
  smenu.classList.add('hidden');
});


document.addEventListener('DOMContentLoaded', function() {
    
    // Function to handle the toggle logic
    function setupPasswordToggle(inputID, toggleID) {
        const input = document.getElementById(inputID);
        const toggle = document.getElementById(toggleID);

        if (input && toggle) {
            toggle.addEventListener('click', function() {
                // Switch between 'password' and 'text'
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                
                // Switch the icon look
                this.textContent = type === 'password' ? '👁️' : '🙈';
            });
        }
    }

    // Apply the function to both sets of IDs
    setupPasswordToggle('password', 'togglepassword');
    setupPasswordToggle('confirmpassword', 'toggleconfirmpassword');
});

// generate password
const password = document.getElementById("password");

function genPassword(){
    var chars = "0123456789abcdefghijklmnopqrstuv!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var passLength = 10;
    var password = "";

    for(var i = 0; i < passLength; i++){
        var randomNumber = Math.floor(Math.random()* chars.length);
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    document.getElementById("password").value = password;
    document.getElementById("confirmpassword").value = password;
}

// button disable

document.addEventListener('DOMContentLoaded', function() {
    
    const checkbox = document.getElementById('termcheckbox');
    const verifyBtn = document.querySelector('.but'); 

        if (checkbox && verifyBtn) {
        checkbox.addEventListener('change', function() {
            // Button is disabled IF checkbox is NOT checked
            verifyBtn.disabled = !this.checked;
        });
    } else {
        console.error("Could not find the checkbox or button. Check your IDs!");
    }
});


// light and dark option

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme")
    console.log('current class name: ' + className);
});

// inverted color

themebox.addEventListener('click', function() {
    document.body.classList.toggle('original-theme');
    document.body.classList.toggle('inverted-theme');

    const className = document.body.className;
    if(className == "original")
    console.log('current class name: ' + className);
});

// Accessibility Toggle

const trigger = document.getElementById('acc-trigger');
const menu = document.getElementById('acc-menu');
const closeBtn = document.getElementById('close-menu');

// Open the menu
trigger.addEventListener('click', () => {
  menu.classList.remove('hidden');
});

// Close the menu via the X icon
closeBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
});