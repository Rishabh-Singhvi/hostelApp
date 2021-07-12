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
          <base-button type="primary" size="sm">Stop Vote</base-button>
          <base-button type="primary" size="sm">Start Feedback</base-button>
          <base-button type="primary" size="sm">Archieve</base-button>
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
                <span class="name mb-0 text-sm">{{ row.title }}</span>
              </div>
            </div>
          </th>
          <td class="col-3 budget">
            {{ row.budget }}
          </td>
          <td class="col-3">
            <badge class="badge-dot mr-4" :type="row.statusType">
              
              <span class="status">{{ row.status }}</span>
            </badge>
          </td>
          <td class="col-3">
            <div>
              <base-button type="default">Fix The Menu</base-button>
            </div>
          </td>

          

          
        </template>
      </base-table>
    </div>

  </div>
</template>
<script>
export default {
  name: "projects-table",
  props: {
    type: {
      type: String,
    },
    title: String,
  },
  data() {
    return {
      tableData: [
        {
          img: "img/theme/bootstrap.jpg",
          title: "1.",
          budget: "Breakfast Description",
          status: "22",
          statusType: "warning",
          completion: 60,
        },
        {
          img: "img/theme/bootstrap.jpg",
          title: "2.",
          budget: "Breakfast Description",
          status: "12",
          statusType: "warning",
          completion: 60,
        },
      ],
    };
  },
};
</script>
<style>
</style>
