const formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = "feedback-form-state";


window.addEventListener("load", () => {
    const savedData = JSON.parse(localStorage.getItem(localStorageKey));
    
    if (savedData) {
        formData.email = savedData.email || "";
        formData.message = savedData.message || "";

        email.value = formData.email;
        message.value = formData.message;
    }
})

form.addEventListener("input", handleInput);

function handleInput(event) {
    const key = event.target.name;
    formData[key] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert("Please fill in all fields.");
        return; 
    }

    localStorage.removeItem(localStorageKey);
    console.log(formData);

    form.reset();
}