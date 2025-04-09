const name = document.querySelector('.validateName');
const phone = document.querySelector('.validatePhone');
const mail = document.querySelector('.validateMail');
const subject = document.querySelector('.validateSubject');
const submit = document.querySelector('.validateSubmit');

function validateSubmit() {

    let check = true;

    // Validering name
    if(name.value.trim().length <= 2 || name.value.trim().length > 50) {
        check = false;
        document.querySelector(".nameErrorMessage").textContent = "Ditt namn måste fler än 2 bokstäver och mindre än 50 bokstäver";
        name.classList.add("error-box");
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
    
    // printa felmeddelanden
    if(check) {
        alert("Tack för ditt meddelande!");
    }
}