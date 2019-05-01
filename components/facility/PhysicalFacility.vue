<template>
    <div class="animated fadeIn">
    <b-card header-tag="header">
      <div  slot="header">
        <div><b-button @click="$emit('changeComponent', 'SupportStaffFacility')">Back</b-button></div>
      </div>
      <b-card-body>
        <b-row>
          <div class=""> Physical Facilities & lots More</div> 
          
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>
