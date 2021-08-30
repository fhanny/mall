<template>
  <div class="login">
    <div class="login-left">
      <img src="../../assets/imgs/login.jpg" alt="" srcset="" />
    </div>
    <div class="login-right">
      <div class="login-content">
        <div class="login-layout">
          <div class="login-header">
            <div class="login-title">
              <img src="../../assets/imgs/logo-mi.png" alt="" srcset="" />
              小米账号
            </div>
            <div class="login-nav">
              <a href="javascript:;">用户协议</a>
              <a href="javascript:;">隐私政策</a>
              <a href="javascript:;">帮助中心</a>
            </div>
          </div>
          <div class="login-container">
            <div class="login-card">
              <h3>
                <span class="checked">登录</span><span class="sep-line">|</span
                ><span>扫码登录</span>
              </h3>
              <form>
                <div class="form-content">
                  <input
                    type="text"
                    placeholder="请输入账号"
                    v-model="username"
                  />
                </div>
                <div class="form-content">
                  <input
                    type="password"
                    placeholder="请输入密码"
                    v-model="password"
                  />
                </div>
                <div class="form-btn">
                  <div class="btn" @click="login">登录</div>
                </div>
              </form>
              <div class="tips">
                <a href="javascript:;" class="reg">立即注册 </a>
                <a href="javascript:;">忘记密码?</a>
                
                
              </div>
            </div>
          </div>
          <div class="login-copyright">
            Copyright ©2020 mi.futurefe.com All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      let { username, password } = this;
      console.log(username , password)
      this.$axios({
        url: "/user/login",
        methods: "post",
        params: {
          username,
          password
        }
      }).then((res) => {
        console.log(res)
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  .login-left {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    img {
      width: 375px;
    }
  }
  .login-right {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin-left: 375px;
    .login-content {
      height: 100%;
      overflow: auto;
      .login-layout {
        position: relative;
        min-height: 100vh;
        padding-bottom: 40px;
        .login-header {
          padding: 20px;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .login-title {
            height: 40px;
            line-height: 40px;
            font-size: 26px;
            color: #333;
            font-weight: 500;
            img {
              margin-right: 10px;
              display: inline-block;
              vertical-align: middle;
              width: 40px;
              height: 40px;
              border-radius: 5px;
            }
          }
          .login-nav {
            a {
              display: inline-block;
              margin-left: 10px;
              margin-right: 10px;
              height: 40px;
              line-height: 40px;
              font-size: 14px;
              font-weight: 400;
              color: #838383;
              &:hover {
                color: #ff6600;
              }
            }
          }
        }
        .login-container {
          padding-top: 20px;
          text-align: center;
          .login-card {
            text-align: left;
            display: inline-block;
            box-sizing: border-box;
            overflow: hidden;
            border-radius: 4px;
            padding: 40px 45px;
            position: relative;
            margin: 0 auto 80px;
            min-width: 450px;
            box-shadow: 0 20px 50px 0 hsl(0deg 0% 64% / 10%);
            h3 {
              line-height: 23px;
              font-size: 24px;
              text-align: center;
              margin: 40px auto 49px;
              .checked {
                color: #ff6600;
              }
              .sep-line {
                margin: 0 32px;
              }
            }
            .form-content {
              // display: inline-block;
              width: 348px;
              height: 50px;
              border: 1px solid #e5e5e5;
              margin-bottom: 20px;
              border-radius: 5px;
              box-sizing: border-box;
              input {
                height: 100%;
                border: none;
                font-size: 16px;
                padding-left: 10px;
                border-radius: 5px;
              }
            }
            .btn {
              display: inline-block;
              vertical-align: top;
              text-align: center;
              border: none;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding: 0 20px;
              font-size: 18px;
              font-weight: 400;
              height: 60px;
              line-height: 60px;
              border-radius: 4px;
              transition: all 0.3s;
              opacity: 0.4;
              background-color: rgb(255, 92, 0);
              color: #fff;
              width: 348px;
              box-sizing: border-box;
              margin-bottom: 10px;
              &:hover {
                background-color: rgb(255, 126, 41);
              }
            }
            .tips {
              width: 348px;
              display: flex;
              font-size: 17px;
              margin-bottom: 10px;
              justify-content: space-between;
              align-items: center;
              padding: 10px 0;
              a {
                display: inline-block;
                color: #ff5c00;
                cursor: pointer;
                &:hover {
                  color: #ff7e29;
                }
              }
            }
          }
        }
        .login-copyright {
          padding: 0 20px;
          text-align: center;
          overflow: hidden;
          position: absolute;
          bottom: 20px;
          color: #999;
          font-size: 12px;
          left: 0;
          right: 0;
        }
      }
    }
  }
}
</style>