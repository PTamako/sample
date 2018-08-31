<template>
  <div @click="resetComponent">
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path:'/'}">
          <img src="../assets/logo.png" alt="icon">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li>{{username}}</li>
            <li class="nav-pile" v-if="username !==''">|</li>
            <li v-if="username !== ''" @click="quitClick">退出</li>
            <li @click="logClick" v-if="username === ''">登录</li>
            <li class="nav-pile" v-if="username ===''">|</li>
            <li @click="regClick" v-if="username === ''">注册</li>
            <li class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>® 2018 PTamako</p>
    </div>
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>我是关于的内容，我是关于的内容，我是关于的内容，我是关于的内容，我是关于的内容，
        我是关于的内容，我是关于的内容，我是关于的内容，我是关于的内容，我是关于的内容，
        我是关于的内容，我是关于的内容，我是关于的内容，我是关于的内容，我是关于的内容，
        我是关于的内容，我是关于的内容，我是关于的内容，我是关于的内容，我是关于的内容，
        我是关于的内容，我是关于的内容，我是关于的内容，我是关于的内容，我是关于的内容，
      </p>
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="successLog"></log-form>
    </my-dialog>
  </div>
</template>

<script>
  import MyDialog from './base/dialog'
  import RegForm from './regForm'
  import LogForm from './logForm'
  import {eventBus} from './../eventBut'

  export default {
    components: {
      MyDialog,
      RegForm,
      LogForm,
      eventBus
    },
    methods: {
      aboutClick() {
        this.isShowAboutDialog = true;
      },
      regClick() {
        this.isShowRegDialog = true;
      },
      logClick() {
        this.isShowLogDialog = true;
      },
      closeDialog(attr) {
        /*1.中括号法可以用变量作为属性名,而点方法不可以;
        2.中括号法可以用数字作为属性名,而点方法不可以;*/
        this[attr] = false;
      },
      quitClick() {
        this.username = ''
      },
      successLog(data) {
        this.closeDialog('isShowLogDialog')
        this.username = data.username
      },
      resetComponent() {
        eventBus.$emit('res-component')
      }
    },
    data() {
      return {
        username: '',
        isShowAboutDialog: false,
        isShowLogDialog: false,
        isShowRegDialog: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    font-size: 70%;
    color: #222;
  }

  ::selection {
    background-color: #b3d4fc;
    text-shadow: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  .clearfix:before,
  .clearfix:after {
    content: " ";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  /* ===============
     自定义页面样式
     =============== */
  body {
    font: 1.2rem "simhei", Arial, Helvetica, sans-serif;
    line-height: 1.5;
    background-color: #f7f7f7;
  }

  a {
    color: #666;
    text-decoration: none;
  }

  a:hover, a:active {
    color: #0ae;
    text-decoration: underline;
  }

  .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }

  .app-head-inner {
    width: 1200px;
    margin: 0 auto;
  }

  .head-logo {
    float: left;
  }

  .app-head-inner img {
    width: 50px;
    margin-top: 20px;
  }

  .head-nav {
    float: right;
  }

  .head-nav ul {
    overflow: hidden;
  }

  .head-nav li {
    cursor: pointer;
    float: left;
  }

  .nav-pile {
    padding: 0 10px;
  }

  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }

  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }

  .button:hover {
    background: #4fc08d;
  }

  .g-form {

  }

  .g-form-line {
    padding: 15px 0;
  }

  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }

  .g-form-input {
    display: inline-block;
  }

  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }

  .g-form-btn {
    padding-left: 100px;
  }

  .g-form-error {
    color: red;
    padding-left: 15px;
  }
</style>
