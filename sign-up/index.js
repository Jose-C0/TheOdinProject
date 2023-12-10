const formArea = document.getElementById('form-area')
const confirmPassword = document.getElementById('confirm-password').value

const hiddenClass = document.querySelector(".hidden")
const signin = document.getElementById("signin")

formArea.addEventListener("input", function(){
    if  
    (document.getElementById('current-password').value != 
    document.getElementById('confirm-password').value    ) 
    {
        hiddenClass.style.display  =  "block";
        signin.disabled = true;
        signin
    }
    else
    {
        hiddenClass.style.display = "none";
        signin.disabled = false;
    }
    
})
