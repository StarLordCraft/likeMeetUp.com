import inputListener from "./inputListener.js";
import register  from "./register.js";
import setAuthType from "./setAuthType.js";

const controler = {
    type:{
        login: true,
        register: false,
    },
    login: {
        email: false,
        password: false
    },
    register: {
        username: false,
        email: false,
        password: false,
        confirmpassword: false,
    }
}

const buttonsAuthType = Array.from(document.querySelectorAll('.main__container__form__section_authtype > button'));

const inputs = Array.from(document.querySelectorAll('input'));

buttonsAuthType.forEach((button) => {
    button.addEventListener('click', function(evt){
        setAuthType(evt, controler);
    });
});

inputs.forEach((input) => {
    input.addEventListener('input', (evt) => {
        inputListener(evt, controler)
    });
})

document.getElementById('formRegister').addEventListener('click', (evt) => {
    register(evt, controler.register);
});
