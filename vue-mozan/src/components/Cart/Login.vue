<template>
  <div :class="{'login-wrap':true,verify:verify}">
    <div class="login">
      <div class="login-top">
        <div class="login-logo">
          <img src="./../../assets/img/login/login-logo.png" />
          <span>x</span>
        </div>
        <div class="login-content">
          <div class="login-form">
            <div class="df">
              <div class="login-icon df">
                <img src="./../../assets/img/login/phone.png" />
              </div>
              <div class="login-text">
                <input type="text" placeholder="请输入手机号" v-model="phone" />
              </div>
            </div>
            <div class="df">
              <div class="login-icon df">
                <img src="./../../assets/img/login/password.png" />
              </div>
              <div class="login-text">
                <input type="password" placeholder="请输入密码" v-model="password" />
              </div>
            </div>
            <div class="df code-block">
              <div class="code-text">
                <input type="text" />
              </div>
              <div class="code">
                <img src="./../../assets/img/login/code.png" />
              </div>
            </div>
          </div>
          <div class="login-btn">
            <span @click="verifing">登陆</span>
          </div>
          <div class="login-func df">
            <span>忘记密码？</span>
            <span>注册</span>
          </div>
        </div>
      </div>
      <div class="out-link df">
        <img src="./../../assets/img/login/qq.png" />
        <img src="./../../assets/img/login/wechat.png" />
        <img src="./../../assets/img/login/weibo.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "login",
  computed: {
    ...mapState({
      verify: state => state.login.verify
    }),
    phone: {
      get() {
        return this.$store.state.login.phone;
      },
      set(val) {
        this.$store.commit("phoneInput", val);
      }
    },
    password: {
      get() {
        return this.$store.state.login.password;
      },
      set(val) {
        this.$store.commit("passwordInput", val);
      }
    }
  },
  methods: {
    ...mapMutations(["verifing"])
  }
};
</script>

<style>
.login-wrap {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  display: none;
}
.login-wrap.verify {
  display: block;
}
.login-wrap .login {
  width: 420px;
  height: 610px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login .login-top {
  padding: 20px;
  width: 100%;
  height: 538px;
  background-color: #fff;
}
.login .login-logo {
  width: 210px;
  margin: 0 auto;
  padding: 30px 0 50px;
}
.login-logo span {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 26px;
}
.login-content .login-form {
  padding-bottom: 53px;
}
.login-form > div + div {
  margin-top: 20px;
}
.login-form .login-icon {
  width: 46px;
  height: 46px;
  border: 1px solid #babec9;
  justify-content: space-around;
}
.login-form .login-text {
  width: 334px;
  height: 46px;
  border: 1px solid #babec9;
  border-left: 0;
}
.login-form .login-text input {
  font-size: 14px;
  width: 100%;
  line-height: 44px;
  padding: 0 0 0 15px;
}
.login-form .code-block {
  justify-content: space-between;
}
.login-form .code-text {
  width: 233px;
  height: 46px;
  border: 1px solid #babec9;
}
.login-form .code-text input {
  width: 100%;
  line-height: 42px;
  font-size: 14px;
}
.login-form .code {
  width: 137px;
  height: 46px;
}
.login-form .code img {
  display: block;
  width: 100%;
}
.login-form input {
  border: 0;
  outline: 0;
}
.login-content .login-btn {
  width: 100%;
}
.login-btn span {
  display: block;
  width: 100%;
  line-height: 46px;
  background-color: #fff500;
  color: #000;
  text-align: center;
  font-size: 22px;
  letter-spacing: 10px;
  cursor: pointer;
  user-select: none;
  margin-bottom: 60px;
}
.login-content .login-func {
  justify-content: space-between;
  font-size: 14px;
  color: #000;
}
.login-content .login-func span {
  cursor: pointer;
  user-select: none;
}
.login .out-link {
  margin-top: 3px;
  width: 100%;
  height: 66px;
  background-color: #fff;
  justify-content: space-around;
}
.login .out-link img {
  cursor: pointer;
  user-select: none;
}
</style>
