<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    <base-dropdown>
                <template v-slot:title>
                  <base-button type="primary" class="dropdown-toggle">
                    {{type}}
                  </base-button>
                </template>
                <span class="dropdown-item" @click="settype('a')">Breakfast</span>
                <a class="dropdown-item" href="#" @click="settype('b')">Lunch</a>
                <a class="dropdown-item" href="#" @click="settype('c')">Dinner</a>
              </base-dropdown>
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
        <!-- <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div class="card card-profile shadow"> -->
        <!-- <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      src="img/theme/team-4-800x800.jpg"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
            </div> -->
        <!-- <div
              class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
            >
              <div class="d-flex justify-content-between">
                <base-button size="sm" type="info" class="mr-4"
                  >Connect</base-button
                >
                <base-button size="sm" type="default" class="float-right"
                  >Message</base-button
                >
              </div>
            </div>
            <div class="card-body pt-0 pt-md-4">
              <div class="row">
                <div class="col">
                  <div
                    class="
                      card-profile-stats
                      d-flex
                      justify-content-center
                      mt-md-5
                    "
                  >
                    <div>
                      <span class="heading">22</span>
                      <span class="description">Friends</span>
                    </div>
                    <div>
                      <span class="heading">10</span>
                      <span class="description">Photos</span>
                    </div>
                    <div>
                      <span class="heading">89</span>
                      <span class="description">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <h3>
                  Jessica Jones<span class="font-weight-light">, 27</span>
                </h3>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Bucharest, Romania
                </div>
                <div class="h5 mt-4">
                  <i class="ni business_briefcase-24 mr-2"></i>Solution Manager
                  - Creative Tim Officer
                </div>
                <div>
                  <i class="ni education_hat mr-2"></i>University of Computer
                  Science
                </div>
                <hr class="my-4" />
                <p>
                  Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick
                  Murphy — writes, performs and records all of his own music.
                </p>
                <a href="#">Show more</a>
              </div>
            </div> -->
        <!-- </div>
        </div> -->

        <div class="col-xl-12 order-xl-1">
          <card shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">ADD FOOD MENU</h3>
                </div>
                <!-- <div class="col-4 text-right">
                  <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                </div> -->
              </div>
            </div>
            <template>
              <form @submit.prevent>
                <!-- <h6 class="heading-small text-muted mb-4">User information</h6> -->
                <!-- <div class="pl-lg-4">
                  
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Username"
                        placeholder="Username"
                        input-classes="form-control-alternative"
                        v-model="model.username"
                      />
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Email address"
                        placeholder="jesse@example.com"
                        input-classes="form-control-alternative"
                        v-model="model.email"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="First name"
                        placeholder="First name"
                        input-classes="form-control-alternative"
                        v-model="model.firstName"
                      />
                    </div>
                    <div class="col-lg-6">
                      <base-input
                        alternative=""
                        label="Last name"
                        placeholder="Last name"
                        input-classes="form-control-alternative"
                        v-model="model.lastName"
                      />
                    </div>
                  </div>
                </div> -->
                <!-- <hr class="my-4" /> -->
                <!-- Address -->
                <!-- <h6 class="heading-small text-muted mb-4">
                  Contact information
                </h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <base-input
                        alternative=""
                        label="Address"
                        placeholder="Home Address"
                        input-classes="form-control-alternative"
                        v-model="model.address"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="City"
                        placeholder="City"
                        input-classes="form-control-alternative"
                        v-model="model.city"
                      />
                    </div>
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="Country"
                        placeholder="Country"
                        input-classes="form-control-alternative"
                        v-model="model.country"
                      />
                    </div>
                    <div class="col-lg-4">
                      <base-input
                        alternative=""
                        label="Postal code"
                        placeholder="Postal code"
                        input-classes="form-control-alternative"
                        v-model="model.zipCode"
                      />
                    </div>
                  </div>
                </div>
                <hr class="my-4" /> -->
                <!-- Description -->
                <!-- <h6 class="heading-small text-muted mb-4">Food Item 1</h6> -->
                <div class="pl-lg-4">
                  <div class="form-group">
                    <base-input alternative="" label="Food Item 1">
                      <textarea
                        rows="4"
                        class="form-control form-control-alternative"
                        placeholder="Menu Description..."
                        v-model="fooditem1.desc"
                      >
                  </textarea>
                    </base-input>
                    <base-input alternative="" label="Food Item 2">
                      <textarea
                        rows="4"
                        class="form-control form-control-alternative"
                        placeholder="Menu Description..."
                        v-model="fooditem2.desc"
                      ></textarea>
                    </base-input>
                    <base-input alternative="" label="Food Item 3">
                      <textarea
                        rows="4"
                        class="form-control form-control-alternative"
                        placeholder="Menu Description..."
                        v-model="fooditem3.desc"
                      >
                    </textarea>
                    </base-input>
                    <div>
                      <base-button type="default" @click="submit()">Submit</base-button>
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
      type:'Menu',
      fooditem1: {
        desc:'',
        voting:0
      },
      fooditem2: {
        desc:'',
        voting:0
      },
      fooditem3: {
        desc:'',
        voting:0
      },
    };
  },
  methods:{
    settype(e)
    {
      if(e=='a')
        this.type="Breakfast"
      if(e=='b')
        this.type="Lunch"
      if(e=='c')
        this.type="Dinner"
    },
    submit()
    {
      let foodObj={};
      foodObj['totalVote']=0;
      foodObj['type']=this.type;
      foodObj['foodArray']=[this.fooditem1,this.fooditem2,this.fooditem3];
      foodObj['feedback']=false;
      foodObj['feedbackArray']=[]
      db.doc('AllFood/'+this.type).set(foodObj)
      db.collection('users').get().then(user=>{
        user.forEach(doc=>{
          let userref= db.doc('users/'+doc.id)
          userref.update({
            votings:[false,false,false]
          })
        })
        this.$notify({
          type: 'success',
          title: 'Food Added!'
        })
        
      })

    }
  }
};
</script>
<style></style>
