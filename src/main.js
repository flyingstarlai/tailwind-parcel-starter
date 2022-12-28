const { trueGray } = require("tailwindcss/colors");

const toggleBtn = document.querySelector('#toggle');

toggleBtn.addEventListener('click', () => {
    if(document.querySelector("html").className === 'dark')
    {
        document.querySelector("html").className = ''
        document.querySelector("#btn-label").innerHTML = "Toggle Dark"
    } else {
        document.querySelector("html").className = 'dark'
        document.querySelector("#btn-label").innerHTML = "Toggle Light"
    }
    
})