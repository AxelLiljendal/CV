let fullNameInput = document.getElementById('fullName').addEventListener('change', updatefullName);
let phoneInput = document.getElementById('phone').addEventListener('change', updatePhone);
let mailInput = document.getElementById('mail').addEventListener('change', updateMail);
let subjectInput = document.getElementById('subject').addEventListener('change', updateSubject);
const submitMessage = document.getElementById('submitMessage');

function updatefullName(e) {
    let fullName = e.target.value;
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

    // Validering fullName
    if(fullName.value.trim().length <= 2 || fullName.value.trim().length > 50) {
        check = false;
        document.querySelector(".fullNameErrorMessage").textContent = "Ditt namn måste innehålla mellan 3-50 bokstäver";
        fullName.classList.add("error-box");
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
        document.querySelector(".mailErrorMessage").textContent = "Mail måste innehålla @";
        mail.classList.add("error-box");
    }

    // validering ämne
    if(subject.value.trim().length < 1 || subject.value.trim().length > 500) {
        check = false;
        document.querySelector(".subjectErrorMessage").textContent = "Du kan endast skriva mellan 1-500 tecken";
        subject.classList.add("error-box");
    }
    
    // 
    if(check) {
        document.querySelector(".formSentMessage").textContent = "Ditt formulär är nu skickat!";
        submitMessage.classList.add("formSent-box");
    }
}