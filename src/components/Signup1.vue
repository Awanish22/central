<template>
  <div>
    <div class="container">
    <h4>Signup</h4>
    <form @submit="submitData" method="post" >
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" name="name" class="form-control" id="exampleInputName" v-model="post.name" aria-describedby="namelHelp">
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" class="form-control" v-model="post.email" id="exampleInputEmail1" aria-describedby="emailHelp">
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" name="password" class="form-control" v-model="post.password" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    
    
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
<router-view></router-view>
  </div>
</template>

<script>
import  Vue from 'vue' 
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

export default {
   name: 'Signup',
  methods:{
    submitData(e)
    {
      this.axios.post('http://localhost:8000/api/login',this.post).then((result)=>{console.warn("result",result)})
      console.warn(this.post)
      e.preventDefault();
    //   console.log("submitData",this.SignupForm.username,this.SignupForm.useremail,this.SignupForm.userpassword)
    },
    
  },
  data()
    {
      return {
          post:{
        name:null,
        email:null,
        password:null,
      }}
    }
}
</script>

<style>

</style>
