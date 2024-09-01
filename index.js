let notify = document.getElementsByClassName('wrong')[0];
let fun = document.getElementsByClassName('func')[0];
let submit = document.getElementsByClassName('submit')[0];
let showLink = document.getElementsByClassName('show')[0];
let loginName = document.getElementsByClassName('name')[0];
let users = ["Kavin"];
let passWord = ["Kavin@091001"];

submit.addEventListener('click', function() {
    // event.preventDefault();
    let userName = document.getElementsByClassName('username')[0].value;
    let password = document.getElementsByClassName('password')[0].value;

     // Redirect to login page if not authenticated
    if (userName === users[0] && password === passWord[0]) {
        localStorage.setItem('authToken', 'authenticated');
        setTimeout(function(){
            window.location.href = './interior/index.html';
        },1000) // Set a token in localStorage
        notify.textContent = "Successfully Login!";
        fun.classList.remove('animation-slide');
        submit.classList.add('hide');
        void fun.offsetWidth; // Trigger reflow to restart animation
        fun.classList.add('animation-slide');
        
    } else {
        notify.textContent = "Invalid Credentials!";
        fun.classList.remove('animation-slide');
        void fun.offsetWidth; // Trigger reflow to restart animation
        fun.classList.add('animation-slide');
    }
});



