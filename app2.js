const form2 = document.getElementById('form2');
const email2 = document.getElementById('email2');

form2.addEventListener('submit', e =>{
    e.preventDefault();
    const emailVal = email2.value;


    if(!validateEmail2(emailVal)){
        form2.classList.add('valid');
    }else{
        form2.classList.remove('valid');
    }
})
const validateEmail2 = (email2) => {
  return String(email2)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};