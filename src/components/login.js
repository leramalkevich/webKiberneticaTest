export class Login {
    constructor() {
        console.log('LOGIN');
        this.element = document.getElementById('element');
        this.passwordElement = document.getElementById('password');

        document.getElementById('process-button').addEventListener('click', this.login.bind(this));
    }

    validateForm() {
        let isValid = true;
        if (this.element.value && this.element.value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) ||
        this.element.value.match(/^\+?[0-9]{3}-?[0-9]{6,12}$/)) {
            this.element.classList.remove('is-invalid');
        } else {
            this.element.classList.add('is-invalid');
            isValid = false;
        }

        if (this.passwordElement.value) {
            this.passwordElement.classList.remove('is-invalid');
        } else {
            this.passwordElement.classList.add('is-invalid');
            isValid = false;
        }

        return isValid;
    }

    async login() {
        if (this.validateForm()) {
            alert("Вы вошли в систему!");
        } else {
            alert("Что-то пошло не так...Проверьте правильность введенных данных!");
        }
    }
}