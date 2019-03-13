<template>
  	<div class="login"> 
      <div class="content"> 
        <div class="manage_tip">
              <p>后台管理系统</p>
        </div>
        <div class="manage_form">
           <el-form>
              <el-form-item label="用户名">
                <el-input v-model="username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="password" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="submit_btn" @click="onSubmit()">登录</el-button>
              </el-form-item>
          </el-form>
        </div>
      </div>
  	</div>
</template>

<script>
  import Vuex from "vuex";

  export default {
    data() {
      return {
          username:"",
          password:""
      }
    },
    computed:{
      ...Vuex.mapState({
        token:state=>state.token
      })
    },
    watch:{
      token(){
        this.$router.push({name:"home"});
      }
    },
    methods: {
      ...Vuex.mapActions({
        handlelogin:"handlelogin"
      }),
      onSubmit(){
        let userInfo = {"username":this.username,"password":this.password};
        this.handlelogin(userInfo);
      }
    }
  }
</script>


<style scoped lang="scss">
	.login{
    width: 100%;
    height: 100%;
     background-color: #324057; 
    .content{
      position: absolute;
      margin:6% auto 0;
      left: 0;
      right: 0;
      width: 28%;
      .manage_form{
        margin-top: 3%;
        border-radius: 5px;
        padding: 20px;
        background: #ffffff;
        .submit_btn{
          width: 100%;
          border-radius: 4px;
        }
        p{
          font-size: 12px;
          color: red;
          text-align: center;
        }
      }
    }
    .manage_tip>p{
         font-size: 34px;
         color: #fff;
         text-align: center;
    }
  }
</style>
