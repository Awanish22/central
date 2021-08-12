<template>
  <div>
      <div class="container">
      <div class="row">
          <div class="col-lg-12">
              <h3>Login</h3>
    <form>
      
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" v-model="loginForm.useremail" id="exampleInputEmail1" aria-describedby="emailHelp">
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" v-model="loginForm.userpassword" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    
    
  </div>
  <button type="submit" v-on:click="loginData" class="btn btn-primary">Submit</button>
</form>
          </div>
          
      </div>
      </div>
    
<router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'Login',
  methods:{
    loginData()
    {
      console.log("loginData",this.loginForm.useremail,this.loginForm.userpassword)
    },
    
  },
  data()
    {
      return {loginForm:{
        username:null,
        userpassword:null,
      }}
    }
}
</script>

<style>

</style>
