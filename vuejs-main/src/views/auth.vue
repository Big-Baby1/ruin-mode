<template>
    <div class="blackBG"></div>
    <div class="auth__main">
        <div class="logo"><img src="../assets/logo.png"></div>
        <div class="auth__server__name"></div>
        <div class="auth__action">{{ action }}</div>
        <Login @change-window="changeWindow(false)" v-if="loginWindow"/>
        <Register @change-window="changeWindow(true)" v-else/>
    </div>
</template>

<script>
import Login from '../components/login.vue';
import Register from '../components/register.vue';

const auth = "auth";
export default {
    name: auth,
    data() {
        return {
            loginWindow: true,
            action: "Авторизация"
        }
    },
    components: {
        Login,
        Register
    },
    methods: {
        changeWindow(toggle) {
            this.loginWindow = toggle;

            this.action = toggle ? "Авторизация" : "Регистрация";
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

.logo img {
    position: absolute;
    width: 5vw;
    left: 47.55vw;
    top: 4.90vw;
}

.blackBG {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
}

.auth__main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-image: url("../assets/authBG.png");
    background-repeat: no-repeat;
    background-size: cover;
}

.auth__server__name {
    text-align: center;
    user-select: none;
    font-size: 7.5vh;
    font-family: 'Righteous', cursive;
    background: -webkit-linear-gradient(#F7BC49, #F0AB24);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 36.5vh;
}

.auth__action {
    text-align: center;
    user-select: none;
    color: white;
    font-size: 2.5vh;
    margin: 5vh 0;
}
</style>