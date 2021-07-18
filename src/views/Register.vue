<template>
    <div class="row justify-content-center" >
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <!-- <div class="card-header bg-transparent pb-5">
                    <div class="text-muted text-center mt-2 mb-3">
                        <small>Sign up with</small>
                    </div>
                    <div class="btn-wrapper text-center">
                        
                        <a href="#" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                            <span class="btn-inner--text">Google</span>
                        </a>
                    </div>
                </div> -->
                <div class="card-body px-lg-6 py-lg-6">
                    <!-- <div class="text-center text-muted mb-4">
                        <small>Or sign up with credentials</small>
                    </div> -->
                    <form role="form">
                        
                      
                                        <br>
                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Name"
                                    addon-left-icon="ni ni-hat-3"
                                    v-model="name">
                        </base-input>
                 
                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Email"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="email">
                        </base-input>
                        
                        <base-input class="input-group-alternative"
                                    placeholder="Password"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="password">
                        </base-input>

                        <div class="row my-4">
                            <div class="col-12">
                                <base-checkbox class="custom-control-alternative">
                                    <span class="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                                </base-checkbox>
                            </div>
                        </div>
                         <div class="col-md-8">
                        <base-button v-if="creating" type="primary" class=" mb-10">
                            Creating...
                        </base-button>
                        <base-button v-else type="primary" class=" mb-10" @click=createAccount>
                            Create Account
                        </base-button>

                        
                       
                   </div>
                        <base-alert type="warning" v-if="error">
                            <strong>{{error}}</strong>
                        </base-alert>
                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <!-- <div class="col-6">
                    <a href="#" class="text-light">
                        <small>Forgot password?</small>
                    </a>
                </div> -->
                <!-- <div class="col-6 text-right">
                    <router-link to="/login" class="text-light">
                        <small>Login into your account</small>
                    </router-link>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>

 import firebase from '@/firebase_init.js';
let db = firebase.firestore();
const auth = firebase.auth();

  export default {
    name: 'register',
    data() {
      return {
        creating:false,
        
        name: '',
        email: '',
        password: '',
        error:'',
        type:'',
        userData:{},
         modals:{
           modal2:false
        },
      }
    },
    methods:{
        // loginGoogle(){
        //     var provider = new firebase.auth.GoogleAuthProvider();
        //     auth.signInWithPopup(provider)
        //     .then(snapshot=>{
        //         let user = snapshot.user
        //         return db.doc("users/"+user.uid).get()
        //         .then(doc => {
        //             if(!doc.exists){
        //                 return db.doc("users/"+ user.uid).set({
        //                     name : user.displayName,
        //                     email: user.email,
        //                     type:user.type,
        //                     registeredEvents:[],
        //                     photoURL:user.photoURL
        //                 })
        //             }
        //             else {
        //                 console.log(doc.data())
        //                 localStorage.setItem('uid',doc.id)
        //                 localStorage.setItem('user',JSON.stringify(doc.data()))
        //             }
        //         })
        //     })
        //     .then(()=>{
        //         this.$router.push('dashboard')
        //     })
        // },
        createAccount(){
            if(this.name!=''&&this.password!=''&&this.email!=''){
                this.creating = true;
            auth.createUserWithEmailAndPassword(this.email,this.password).then(user=>{
                console.log(user)
                let userData= {
                    name : this.name,
                    email: this.email,
                    type: "student",
                    votings:[false,false,false]
                }
                db.doc("users/"+user.user.uid).set(userData).then(()=>{
                    console.log(userData)
                    localStorage.setItem('uid',user.user.uid)
                    localStorage.setItem('user',JSON.stringify(userData))
                    localStorage.setItem('type','student')
                    this.creating=false
                    this.$router.push('Dashboard')
                })
            })
            .catch(err=>{
                this.creating=false
                this.error = err.message
                console.log(err)
            })
            // auth.onAuthStateChanged(firebaseUser=>{
            //     if (firebaseUser) {
            //             firebaseUser.sendEmailVerification().then(function() {
            //                 console.log('send Verification');
            //                 //document.getElementById("verifMessage").innerHTML = "Check your inbox for verification email!";
            //             }, function(error) {
            //                 console.log(error);
            //             });
            //         } else {
            //             console.log('not logged in');
            //             //document.getElementById('btnLogout').style.display = 'none';
            //         }
            // })
            }
            else{
                this.modals.modal2=true
            }
        }
    }
  }
</script>
<style>
</style>
