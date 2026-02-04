const switcher = document.querySelector('.box8');
const themebox = document.querySelector('.box9');
const dropdown = document.getElementById('langdropdown');
const header = dropdown.querySelector('.header');
const list = dropdown.querySelector('.dropdown-list');
const currentLangText = document.getElementById('current-lang');

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
    setupPasswordToggle('password', 'togglePassword');
    setupPasswordToggle('password1', 'togglePassword1');
    setupPasswordToggle('password2', 'togglePassword2');
    setupPasswordToggle('password3', 'togglePassword3');
    setupPasswordToggle('password4', 'togglePassword4');
    setupPasswordToggle('password5', 'togglePassword5');

});

//Other toggle option

function toggleFields() {
    const selectedValue = document.getElementById('id-type').value;
    const allGroups = document.querySelectorAll('.toggle-content');

    // Hide all groups first
    allGroups.forEach(group => {
        group.style.display = 'none';
    });

    // Show only the one that matches the selected value
    const activeGroup = document.getElementById(selectedValue + '-fields');
    if (activeGroup) {
        activeGroup.style.display = 'block';
    }
}

// username, mobile and other toggle

function openTab(evt, tabName) {
    // Get all elements with class="tab-content" and hide them
    let tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    let tabLinks = document.getElementsByClassName("btn");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// button disable

document.addEventListener('DOMContentLoaded', function() {
    
    const checkbox = document.getElementById('termcheckbox');
    const signinBtn = document.querySelector('.but'); 

        if (checkbox && signinBtn) {
        checkbox.addEventListener('change', function() {
            // Button is disabled IF checkbox is NOT checked
            signinBtn.disabled = !this.checked;
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