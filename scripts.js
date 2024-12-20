
function scrollToServices() {
    document.getElementById("services").scrollIntoView({behavior: "smooth"});
}


function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for contacting us, ${name}! We will get back to you soon.`);
        document.getElementById('contact-form').reset();
    } else {
        alert("Please fill in all the fields.");
    }
}
