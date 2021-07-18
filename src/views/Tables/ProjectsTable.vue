<template>
  <div class="card shadow" :class="type === 'dark' ? 'bg-default' : ''">
    <div
      class="card-header border-0"
      :class="type === 'dark' ? 'bg-transparent' : ''"
    >
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0" :class="type === 'dark' ? 'text-white' : ''">
            {{ title }}
          </h3>
        </div>
        <div class="col text-right">
          <base-button type="primary" size="sm" @click="stopVote()">Stop Vote</base-button>
          <base-button type="primary" size="sm" @click="startFeedback()">Start Feedback</base-button>
          <base-button type="primary" size="sm" @click="archieve()">Archieve</base-button>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush"
        :class="type === 'dark' ? 'table-dark' : ''"
        :thead-classes="type === 'dark' ? 'thead-dark' : 'thead-light'"
        tbody-classes="list"
        :data="tableData"
      >
        <template slot="columns">
          <th>Serial No.</th>
          <th>Breakfast Description</th>
          <th>Votes</th>
          <th></th>
          
        </template>

        <template class="row" slot-scope="{ row }">
          <th class="col-3" scope="row">
            <div class="media align-items-center">
              <div class="media-body">
                <span class="name mb-0 text-sm"></span>
              </div>
            </div>
          </th>
          <td class="col-3 budget">
            {{row.desc}}
          </td>
          <td class="col-3">
            <badge class="badge-dot mr-4" >
              
              <span class="status">{{row.voting}}</span>
            </badge>
          </td>
          <td class="col-3">
            <div>
              <base-button type="default" @click="deleteother(row.voting)">Fix The Menu</base-button>
            </div>
          </td>

          

          
        </template>
      </base-table>
    </div>

  </div>
</template>
<script>
import firebase from '@/firebase_init.js';
let db = firebase.firestore();
export default {
  name: "projects-table",
  props: {
    type: {
      type: String,
    },
    title: String,
    tableData:Array,
    arch:Object
  },
  data() {
    return {
       ...this.tableData
      // tableData: [
        // {
        //   img: "img/theme/bootstrap.jpg",
        //   title: "1.",
        //   budget: "Breakfast Description",
        //   status: "22",
        //   statusType: "warning",
        //   completion: 60,
        // },
        // {
        //   img: "img/theme/bootstrap.jpg",
        //   title: "2.",
        //   budget: "Breakfast Description",
        //   status: "12",
        //   statusType: "warning",
        //   completion: 60,
        // },
      // ],
     // tableData:...this.tableData
    };
  },
  methods:{
    deleteother(vote)
    {
      let newfoodArray=[]
      console.log(this.tableData)
      for(let i=0;i<this.tableData.length;i++)
      {
        if(this.tableData[i].voting==vote)
        {
          newfoodArray.push(this.tableData[i])
        }
      }
      console.log(newfoodArray)
      console.log(this.title)
      let fodref=db.doc('AllFood/'+this.title)
      fodref.update({
        foodArray:newfoodArray,
      })
    },
    stopVote()
    {
      db.collection('users').get().then(user=>{
        user.forEach(doc=>{
          let userref= db.doc('users/'+doc.id)
          userref.update({
            votings:[true,true,true]
          })
        })
      })
      this.$notify({
          type: 'warning',
          title: 'Voting Stopped!'
        })
    },
    startFeedback()
    {
      let fodref=db.doc('AllFood/'+this.title)
      fodref.update({
        feedback:true,
      })
      this.$notify({
          type: 'success',
          title: 'Feedback Started!'
        })
    },
    archieve()
    {
      console.log(this.arch)
      db.collection("Archieve").add(this.arch[0])
      db.collection("AllFood").doc(this.title).delete().then(()=>{
        this.$router.go()
      })
      this.$notify({
          type: 'success',
          title: 'Archieved!'
        })
    }
  }
};
</script>
<style>
</style>
