const form = document.getElementById("form");



form.addEventListener('submit',e =>{
    e.preventDefault();
    const first = form["firstName"].value;
    const last = form["lastName"].value;
    const email = form["Email"].value;
    const password = form["password"].value;
    alert(first+last+email+password);
    
});