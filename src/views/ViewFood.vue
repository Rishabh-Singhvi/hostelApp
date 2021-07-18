<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
            <!-- Card stats -->
            <!-- <div class="row">
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-red"
                                sub-title="350,897"
                                icon="ni ni-active-40"
                                class="mb-4 mb-xl-0">

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Total traffic"
                                type="gradient-orange"
                                sub-title="2,356"
                                icon="ni ni-chart-pie-35"
                                class="mb-4 mb-xl-0">

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Sales"
                                type="gradient-green"
                                sub-title="924"
                                icon="ni ni-money-coins"
                                class="mb-4 mb-xl-0">

                        <template slot="footer">
                            <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 5.72%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>

                </div>
                <div class="col-xl-3 col-lg-6">
                    <stats-card title="Performance"
                                type="gradient-info"
                                sub-title="49,65%"
                                icon="ni ni-chart-bar-32"
                                class="mb-4 mb-xl-0">

                        <template slot="footer">
                            <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
                            <span class="text-nowrap">Since last month</span>
                        </template>
                    </stats-card>
                </div>
            </div> -->
        </base-header>

    <div class="container-fluid mt--6">
      <div class="row">
        

        <div class="col-xl-12 order-xl-1">
          <card shadow type="secondary" class="mb-2" v-for="(f,i) in foodArrayB" :key="i">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">{{f.type}}</h3>
                </div>
              </div>
            </div>
            <template>
              <form @submit.prevent>
                <div>
                  <div class="row">
                    <div class="col-md-4" v-for="(item,indx) in f.foodArray" :key="indx">
                      <base-input alternative="" label="Food Item">
                        <textarea
                          rows="8"
                          class="form-control form-control-alternative"
                          placeholder="A few words about you ..."
                          disabled
                          v-model="item.desc"
                        >
                        
                  </textarea>
                      </base-input>
                      <div>
                        <base-button type="default" v-if="voteu.votings[0]==false" @click="votethis(f,indx)">Vote</base-button>
                        <base-button type="default" v-else disabled @click="votethis(f,indx)">Already Voted</base-button>
                        <base-button type="default" v-if="f.feedback" @click="modals.modal3=true">Add Feedback</base-button>
                        <modal :show="modals.modal3">
                          <template v-slot:header>
                            <h5 class="modal-title" id="exampleModalLabel">
                              Add Feedback
                            </h5>
                          </template>
                          <div>
                            <textarea
                                rows="4"
                                class="form-control form-control-alternative"
                                placeholder="Menu Description..."
                                v-model="feed"
                              >
                          </textarea>
                          </div>
                          <template v-slot:footer>
                            <base-button
                              type="secondary"
                              @click="modals.modal3 = false"
                              >Close</base-button
                            >
                            <base-button type="primary" @click="addfeedback(f)"
                              >Save changes</base-button
                            >
                          </template>
                        </modal>
                      </div>
                    </div>
                  </div>
                </div>
                
              </form>
            </template>
          </card>
          <card shadow type="secondary" class="mb-2" v-for="(f,i) in foodArrayL" :key="i">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">{{f.type}}</h3>
                </div>
              </div>
            </div>
            <template>
              <form @submit.prevent>
                <div>
                  <div class="row">
                    <div class="col-md-4" v-for="(item,indx) in f.foodArray" :key="indx">
                      <base-input alternative="" label="Food Item">
                        <textarea
                          rows="8"
                          class="form-control form-control-alternative"
                          placeholder="A few words about you ..."
                          disabled
                          v-model="item.desc"
                        >
                        
                  </textarea>
                      </base-input>
                      <div>
                        <base-button type="default" v-if="voteu.votings[1]==false" @click="votethis(f,indx)">Vote</base-button>
                        <base-button type="default" v-else disabled @click="votethis(f,indx)">Already Voted</base-button>
                        <base-button type="default" v-if="f.feedback" @click="modals.modal2=true">Add Feedback</base-button>
                        <modal :show="modals.modal2">
                          <template v-slot:header>
                            <h5 class="modal-title" id="exampleModalLabel">
                              Add Feedback
                            </h5>
                          </template>
                          <div>
                            <textarea
                                rows="4"
                                class="form-control form-control-alternative"
                                placeholder="Menu Description..."
                                v-model="feed"
                              >
                          </textarea>
                          </div>
                          <template v-slot:footer>
                            <base-button
                              type="secondary"
                              @click="modals.modal2 = false"
                              >Close</base-button
                            >
                            <base-button type="primary" @click="addfeedback(f)"
                              >Save changes</base-button
                            >
                          </template>
                        </modal>
                      </div>
                    </div>
                  </div>
                </div>
                
              </form>
            </template>
          </card>
          <card shadow type="secondary" class="mb-2" v-for="(f,i) in foodArrayD" :key="i">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">{{f.type}}</h3>
                </div>
              </div>
            </div>
            <template>
              <form @submit.prevent>
                <div>
                  <div class="row">
                    <div class="col-md-4" v-for="(item,indx) in f.foodArray" :key="indx">
                      <base-input alternative="" label="Food Item">
                        <textarea
                          rows="8"
                          class="form-control form-control-alternative"
                          placeholder="A few words about you ..."
                          disabled
                          v-model="item.desc"
                        >
                        
                  </textarea>
                      </base-input>
                      <div>
                        <base-button type="default" v-if="voteu.votings[2]==false" @click="votethis(f,indx)">Vote</base-button>
                        <base-button type="default" v-else disabled @click="votethis(f,indx)">Already Voted</base-button>
                        <base-button type="default" v-if="f.feedback" @click="modals.modal1=true" >Add Feedback</base-button>
                        <modal :show="modals.modal1">
                          <template v-slot:header>
                            <h5 class="modal-title" id="exampleModalLabel">
                              Add Feedback
                            </h5>
                          </template>
                          <div>
                            <textarea
                                rows="4"
                                class="form-control form-control-alternative"
                                placeholder="Menu Description..."
                                v-model="feed"
                              >
                          </textarea>
                          </div>
                          <template v-slot:footer>
                            <base-button
                              type="secondary"
                              @click="modals.modal1 = false"
                              >Close</base-button
                            >
                            <base-button type="primary" @click="addfeedback(f)"
                              >Save changes</base-button
                            >
                          </template>
                        </modal>
                      </div>
                    </div>
                  </div>
                </div>
                
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import firebase from '@/firebase_init.js';
let db = firebase.firestore();
export default {
  name: "user-profile",
  data() {
    return {
      foodArrayB:[],
      foodArrayL:[],
      foodArrayD:[],
      voteu:{},
      modals:{
        modal1:false,
        modal2:false,
        modal3:false
      },
      feed:'',
    };
  },
  // watch:{
  //   v:function()
  //   {
  //     this.voteu.votings[2]=true
  //   }
  // },
  methods:{
    votethis(e,e2)
    {
        //console.log(this.foodArray.foodArray[e2]['desc'])
        // console.log(this.foodArray)
        // console.log(e2)
        // let foodref=db.collection('AllFood').doc(e);
        // foodref.update({
        //   totalVote: firebase.firestore.FieldValue.increment(1),
        
        // })
        e.totalVote+=1
        e.foodArray[e2].voting+=1
        db.collection('AllFood').doc(e.type).set(e).then(()=>{
            let uid = localStorage.getItem('uid');
        if(e.type=='Breakfast')
        {
          db.doc('users/'+uid).get().then(u=>{
          console.log(u.data())
          let neu=u.data()
          neu.votings[0]=true
          console.log(neu)
           db.doc('users/'+uid).set(neu).then(()=>{
             this.$router.go()
           })
        })
        }
        else if(e.type=='Lunch')
        {
          db.doc('users/'+uid).get().then(u=>{
          console.log(u.data())
          let neu=u.data()
          neu.votings[1]=true
          this.voteu.votings[1]=true
          console.log(neu)
           db.doc('users/'+uid).set(neu).then(()=>{
             //this.$router.go()
           })
        })
        }
        else if(e.type=='Dinner')
        {
          db.doc('users/'+uid).get().then(u=>{
          console.log(u.data())
          let neu=u.data()
          neu.votings[2]=true
          console.log(neu)
           db.doc('users/'+uid).set(neu).then(()=>{
             this.$router.go()
           })
        })
        }
        })
        this.$notify({
          type: 'success',
          title: 'Voting Successful!'
        })
        
        
        
        // foodref.set({
        //   foodArray:this.foodArray
        // })
        
      
    },
    addfeedback(f)
    {
      let feedref=db.doc('AllFood/'+f.type);
      feedref.update({
        feedbackArray: firebase.firestore.FieldValue.arrayUnion(this.feed)
      }).then(()=>{
          this.modals.modal1=false
          this.modals.modal2=false
          this.modals.modal3=false
      })
      this.$notify({
          type: 'success',
          title: 'Feedback Added!'
        })

    //   this.foodArrayB=[]
    // this.foodArrayL=[]
    // this.foodArrayD=[]
    }
    
  },
  beforeMount()
  {
    db.collection('AllFood').onSnapshot(food=>{
      if(this.foodArrayB.length!==0) this.foodArrayB=[]
      if(this.foodArrayL.length!==0) this.foodArrayL=[]
      if(this.foodArrayD.length!==0) this.foodArrayD=[]
      food.forEach(f=>{
        console.log(f.data().type)
        if(f.data().type=='Breakfast')
        this.foodArrayB.push(f.data())
        else if(f.data().type=='Lunch')
        this.foodArrayL.push(f.data())
        else if(f.data().type=='Dinner')
        this.foodArrayD.push(f.data())
        console.log(this.foodArrayD)
      })
    });
    let uid=localStorage.getItem('uid')
    console.log(uid)
    db.doc('users/'+uid).get().then(u=>{
          console.log(u.data())
          this.voteu=u.data()
          console.log(this.voteu)
        })
  }
};
</script>
<style></style>
