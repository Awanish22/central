<template>
  <div>
    <div class="container">
    <h4>Signup</h4>
    <form>
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputName" v-model="loginForm.username" aria-describedby="namelHelp">
    
  </div>
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
  <button type="submit" v-on:click="signupData" class="btn btn-primary">Submit</button>
</form>
    </div>
<router-view></router-view>
  </div>
</template>

<script>


export default {
   name: 'Signup',
  methods:{
    signupData()
    {
      console.log("signupData",this.loginForm.username,this.loginForm.useremail,this.loginForm.userpassword)
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
