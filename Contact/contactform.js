let userNameInput = document.getElementById('userName').addEventListener('change', updateuserName);
let phoneInput = document.getElementById('phone').addEventListener('change', updatePhone);
let mailInput = document.getElementById('mail').addEventListener('change', updateMail);
let subjectInput = document.getElementById('subject').addEventListener('change', updateSubject);
const submitMessage = document.getElementById('submitMessage');

function updateuserName(e) {
    let userName = e.target.value;
}

function updatePhone(e) {
    let phone = e.target.value;
}

function updateMail(e) {
    let mail = e.target.value;
}

function updateSubject(e) {
    let subject = e.target.value;
}

function validateSubmit() {

    let check = true;

    document.querySelectorAll(".error").forEach(div => div.textContent = "");
    document.querySelectorAll("input, textarea").forEach(field => field.classList.remove("error-box"));

    // Validering userName
    if(userName.value.trim().length <= 2 || userName.value.trim().length > 50) {
        check = false;
        document.querySelector(".userNameErrorMessage").textContent = "Ditt namn måste fler än 2 bokstäver och mindre än 50 bokstäver";
        userName.classList.add("error-box");
    }

    // phonepattern 
    // /^ = start expression
    // {7,13} = minimum 7 and maximum 13 characters
    // [0-9] = digit between 0-9
    // (\+)? = accepts a plus character and "?" makes it optional
    // $/ end expression
    const phonePattern = /^\+?[0-9]{7,13}$/; 

    // validering phone
    if(!phonePattern.test(phone.value.trim())) {
        check = false;
        document.querySelector(".phoneErrorMessage").textContent = "Telefonnumret måste vara mellan 7-13 siffror";
        phone.classList.add("error-box");
    }

    // validering mail
    if(!mail.value.trim().includes("@")) {
        check = false;
        document.querySelector(".mailErrorMessage").textContent = "Mail måste innehålla ett @";
        mail.classList.add("error-box");
    }

    // validering ämne
    if(subject.value.trim().length < 1 || subject.value.trim().length > 500) {
        check = false;
        document.querySelector(".subjectErrorMessage").textContent = "Det måste vara mellan 1-500 tecken";
        subject.classList.add("error-box");
    }
    
    // 
    if(check) {
        document.querySelector(".formSentMessage").textContent = "Ditt formulär är nu skickat!";
        submitMessage.classList.add("formSent-box");
    }
}