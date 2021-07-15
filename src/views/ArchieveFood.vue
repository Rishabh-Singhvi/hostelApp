<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--6">
      <div class="row">
          <card class="col-md-4" shadow type="secondary" v-for="(arch,i) in allarch" :key="i">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">{{arch.type}}</h3>
                </div>
                <!-- <div class="col-4 text-right">
                  <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                </div> -->
              </div>
            </div>
            <template>
              <form @submit.prevent>
                
                    <div>
                      <base-input alternative="" label="Food Item">
                        <div id="app">
                          Date: {{ new Date().toLocaleString() }}
                        </div>
                        <textarea
                          rows="8"
                          class="form-control form-control-alternative"
                          placeholder="A few words about you ..."
                          v-model="arch.foodArray[0].desc"
                        >
                        
                        </textarea
                        >
                      </base-input>
                      <div>
                        <base-button
                          type="primary"
                          @click="setf(arch.id)"

                        >
                          View Feedback
                        </base-button>
                        <modal :show="modals.modal0">
                          <template v-slot:header>
                            <h5 class="modal-title" id="exampleModalLabel">
                              Feedbacks
                            </h5>
                          </template>
                          <div v-for="(fe,indx) in newfarr[0] " :key="indx"><span>{{fe}}</span></div>
                          <template v-slot:footer>
                            <base-button
                              type="secondary"
                              @click="modals.modal0 = false"
                              >Close</base-button
                            >
                            <base-button type="primary"
                              >Save changes</base-button
                            >
                          </template>
                        </modal>
                      </div>
                    </div>
              </form>
            </template>
          </card>
          <!-- <card class="col-md-4" shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Breakfast</h3>
                </div>
              </div>
            </div>
            <template>
              <form @submit.prevent>
                
                    <div>
                      <base-input alternative="" label="Food Item">
                        <div id="app">
                          Date: {{ new Date().toLocaleString() }}
                        </div>
                        <textarea
                          rows="8"
                          class="form-control form-control-alternative"
                          placeholder="A few words about you ..."
                        >
A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea
                        >
                      </base-input>
                      <div>
                        <base-button
                          type="primary"
                          @click="modals.modal0 = true"
                        >
                          View Feedback
                        </base-button>
                        <modal>
                          <template v-slot:header>
                            <h5 class="modal-title" id="exampleModalLabel">
                              Modal title
                            </h5>
                          </template>
                          <div>...</div>
                          <template v-slot:footer>
                            <base-button
                              type="secondary"
                              @click="modals.modal0 = false"
                              >Close</base-button
                            >
                            <base-button type="primary"
                              >Save changes</base-button
                            >
                          </template>
                        </modal>
                      </div>
                    </div>
              </form>
            </template>
          </card> -->
          <!-- <card class="col-md-4" shadow type="secondary">
            <div slot="header" class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Breakfast</h3>
                </div>
              </div>
            </div>
            <template>
              <form @submit.prevent>
                
                    <div>
                      <base-input alternative="" label="Food Item">
                        <div id="app">
                          Date: {{ new Date().toLocaleString() }}
                        </div>
                        <textarea
                          rows="8"
                          class="form-control form-control-alternative"
                          placeholder="A few words about you ..."
                        >
A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea
                        >
                      </base-input>
                      <div>
                        <base-button
                          type="primary"
                          @click="modals.modal0 = true"
                        >
                          View Feedback
                        </base-button>
                        <modal :show="modals.modal0" >
                          <template v-slot:header>
                            <h5 class="modal-title" id="exampleModalLabel">
                              Modal title
                            </h5>
                          </template>
                          <div>...</div>
                          <template v-slot:footer>
                            <base-button
                              type="secondary"
                              @click="modals.modal0 = false"
                              >Close</base-button
                            >
                            <base-button type="primary"
                              >Save changes</base-button
                            >
                          </template>
                        </modal>
                      </div>
                    </div>
              </form>
            </template>
          </card> -->
        
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
      modals: {
          modal0 : false
      },
      allarch:[],
      newfarr:[]
    };
  },
  methods:{
    setf(id)
    {
      db.doc("Archieve/"+id).get().then(d=>{
        if(this.newfarr.length!==0) this.newfarr=[]
        this.newfarr.push(d.data().feedbackArray)
        console.log(this.newfarr)
        this.modals.modal0=true
      })
    }
  },
  beforeMount()
  {
    db.collection("Archieve").get().then(arch=>{
      arch.forEach(doc=>{
        let newobj=doc.data()
        newobj['id']=doc.id
        this.allarch.push(newobj)
      })
      console.log(this.allarch);
    })
  }
};
</script>
<style></style>
