<template>
    <div id="signup__block">
        <input type="text" spellcheck="false" placeholder="Введите логин..." v-model="username">
        <input type="email" spellcheck="false" placeholder="Введите e-mail..." v-model="email">
        <input type="password" spellcheck="false" placeholder="Введите пароль..." v-model="password">
        <input type="password" spellcheck="false" placeholder="Повторите пароль..." v-model="confirmPassword">
        <div class="signup__button" @click="register">Зарегистрироваться</div>
        <div class="signup__window" @click="changeWindow">У меня есть аккаунт</div>
    </div>
</template>

<script>
const reg = "register";
export default {
    name: reg,
    data() {
        return {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    },
    methods: {
        changeWindow() {
            this.$emit('change-window');
        },

        register() {
            let checkPassword = /^[a-zA-Z0-9]+$/;
            let checkUsername = /^[a-zA-Z1-9]+$/;
            let checkEmail = /\S+@\S+\.\S+/;


            if (this.password !== this.confirmPassword) return global.app.addNotify(`e`, `Пароли не совпадают`);
            if (!(checkPassword.test(this.password))) return global.app.addNotify(`e`, `Пароль может содержать только az A-Z 0-9`);
            if (!(this.password.length >= 8 && this.password.length <= 32)) return global.app.addNotify(`e`, `Пароль должен быть от 8 до 32 символов`);
            if (!(checkUsername.test(this.username))) return global.app.addNotify(`e`, `Логин может содержать только az A-Z 1-9`);
            if (!(this.username.length > 3 && this.username.length < 17)) return global.app.addNotify(`e`, `Логин должен быть от 4 до 16 символов`);
            if (!(checkEmail.test(this.email))) return global.app.addNotify(`e`, `Электронная почта не соответствует формату`);
            if (!(this.email.length > 6 && this.email.length < 49)) return global.app.addNotify(`e`, `E-mail должен быть от 6 до 48 символов`);

            window.mp.trigger('client::auth:register', this.username, this.email, this.password);
        }
    }
}
</script>

<style scoped>
#signup__block {
    color: #e9e9e9;
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -65%);
    width: 20%;
    font-size: .9vw;
    text-align: center;
    user-select: none;
}

#signup__block input {
    font-size: .9vw;
    outline: none;
    line-height: 0;
    text-align: center;
    width: 99%;
    height: 1vw;
    padding: .8vw 0;
    margin: .3vw 0;
    background: none;
    border: .1vw solid rgba(255, 255, 255, 0.196);
    border-radius: .2vw;
    color: #ddd;

}

#signup__block input:focus {
    box-shadow: 0 0 5px rgb(19, 125, 1);
}

::placeholder {
    font-size: .9vw;
    color: #ccc;
    opacity: .5;
}

.signup__button {
    background-color: rgb(19, 125, 1);
    font-size: .9vw;
    text-align: center;
    width: 100%;
    padding: .8vw 0;
    margin: .3vw 0;
    border-radius: .2vw;
    cursor: pointer;
}

.signup__window {
    cursor: pointer;
    margin: 1vw 0;
    text-decoration: underline;
}

.signup__window:hover {
    color: #ccc;
    text-decoration: none;
}
</style>