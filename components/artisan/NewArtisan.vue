<template>
 <div class="animated fadeIn">
     <b-button @click="$emit('changeComponent', 'ArtisansListView')">Back</b-button>
    <b-card>
<b-row>
  <div class="form-wizard" style="width:800px; margin:0 auto;" color="red">
    <form-wizard @on-complete="onComplete"
                       :start-index="0"
                       color="blue">
     <tab-content title="Personal details"
                  icon="icon-user">
       <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

     

      <b-form-group id="input-group-2" label="Firs name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.firstname"
          required
          placeholder="Enter First name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Middle Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-2" label="Surname:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.surname"
          required
          placeholder="Enter Surname"
        ></b-form-input>
      </b-form-group>
            <b-form-group id="input-group-2" label="Date of Birth:" label-for="input-2">
        <datepicker :value="dateOfBirth" :readonly="true" format="YYYY-MM-DD" name="date1"></datepicker>

      </b-form-group>

       <b-form-group id="input-group-3" label="Gender" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.gender"
          :options="gender"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Place Of Birth:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.palceofbirth"
          required
          placeholder="Enter Place Of Birth"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Permanent Address:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.permanentaddress"
          required
          placeholder="Enter Permanentaddress"
        ></b-form-input>
      </b-form-group>


      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

     <b-form-group id="input-group-3" label="State Of Origin" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.stateoforign"
          :options="stateoforign"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Local Government:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.localgovernment"
          required
          placeholder="Enter Local Government"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nationality" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.nationality"
          required
          placeholder="Enter Nationality"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
     </tab-content>
     <tab-content title="Artisan NVQ Center"
                  icon="icon-pencil">
        <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      

      <b-form-group id="input-group-2" label="Center Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.center_name"
          required
          placeholder="Enter Center Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Center Number:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.center_number"
          required
          placeholder="Enter Center Number"
        ></b-form-input>
      </b-form-group>

<b-form-group id="input-group-2" label="Candidate Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.candidate_name"
          required
          placeholder="Enter Candidate Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Candidate Trade:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.candidate_trade"
          required
          placeholder="Enter Candidate Trade"
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
     </tab-content>
     <tab-content title="Apprentiship Center"
                  icon="icon-pencil">
   <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Artsan ID:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.artsanid"
          required
          placeholder="Enter ID"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Apprentiship Place:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.apprentiship_place"
          required
          placeholder="Enter Apprentiship Place"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Apprentiship Year:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.apprentiship_year"
          required
          placeholder="Enter Apprentiship Year"
        ></b-form-input>
      </b-form-group>

<b-form-group id="input-group-2" label="Master Full Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.master_full_name"
          required
          placeholder="Enter Master Full Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Master Phone Number:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.master_phone_number"
          required
          placeholder="Enter Master Phone Number"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Apprentiship Completion Status:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.apprentiship_completion_status"
          required
          placeholder="Enter Apprentiship Completion Status"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Reason for Leaving:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.reason_for_leaving"
          required
          placeholder="Enter Reason for Leaving"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Certificate Testimonial:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.certificate_testimonia"
          required
          placeholder="Enter Certificate Testimonial"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Reason for not Issued:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.reason_for_not_issued"
          required
          placeholder="Enter Reason_for_not_Issued"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Trade Learnt:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.trade_learnt"
          required
          placeholder="Enter Trade Learnt"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Record Date:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.record_date"
          required
          placeholder="Enter Record Date"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
     </tab-content>
     <tab-content title="Artsan Education"
                  icon="icon-pencil">
      <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Artsan ID:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.artsanid"
          required
          placeholder="Enter ID"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="School Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.school_name"
          required
          placeholder="Enter School Name"
        ></b-form-input>
      </b-form-group>

<b-form-group id="input-group-2" label="Year Start:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.year_start"
          required
          placeholder="Enter Year Start"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Year End:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.year_end"
          required
          placeholder="Enter Year End"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Qualification Earned:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.qualification_earned"
          required
          placeholder="Enter Qualification Earned"
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
     
     </tab-content>
     <tab-content title="Artisan Employment History"
                  icon="icon-pencil">
       <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Artsan ID:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.artsanid"
          required
          placeholder="Enter ID"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="trade:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.trade"
          required
          placeholder="Enter Trade"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Years Practice:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.years_practice"
          required
          placeholder="Enter Years  Practice"
        ></b-form-input>
      </b-form-group>

<b-form-group id="input-group-2" label="Employment Companies:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.employment_companies"
          required
          placeholder="Enter Employment Companies"
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-2" label="Years of Employment:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.years_of_employment"
          required
          placeholder="Enter Years of Employment"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Job Roles:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.job_roles"
          required
          placeholder="Enter Job Roles"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Superviors Phone Numbers:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.superviors_phone_numbers"
          required
          placeholder="Enter Superviors Phone Numbers"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Current Work Project:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.current_work_project"
          required
          placeholder="Enter Current Work Project"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Site Address:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.site_address"
          required
          placeholder="Enter Site Address"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Current Employment Status:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.current_employment_status"
          required
          placeholder="Enter Current Employment Status"
        ></b-form-input>
      </b-form-group>

 <b-form-group id="input-group-2" label="Record Date:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.record_date"
          required
          placeholder="Enter Record Date"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
    </tab-content>
 </form-wizard>
  </div>
  
</b-row>
      </b-card>
    </div>


</template>

<script> 
import datepicker from 'vue-date-picker'

  export default {
    
    name: 'new-artisan',
     components: {
      datepicker 
     },
    data() {
      return {
        form: {
          email: '',
          name: '',
          stateoforign: null,
          checked: [],
          dateOfBirth: ''
        },
        stateoforign: [{ text: 'Select One', value: null },'Abia', 
'Adamawa',
'Akwa Ibom',
'Anambra',
'Bauchi',
'Bayelsa',
'Benue',
'Borno',
'Cross River',
'Delta',
'Ebonyi',
'Enugu',
'Edo',
'Ekiti',
'Gombe',
'Imo',
'Jigawa',
'Kaduna',
'Kano',
'Katsina',
'Kebbi',
'Kogi',
'Kwara',
'Lagos',
'Nasarawa',
'Niger',
'Ogun',
'Ondo',
'Osun',
'Oyo',
'Plateau',
'Rivers',
'Sokoto',
'Taraba',
'Yobe',
'Zamfara',
],
gender: [{ text: 'Select One', value: null },'Male','Female',],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
     
    methods: {
      onComplete: function(){
          alert('Yay. Done!');
       }
      }
      
      }

</script>
<style scoped>
.form-wizard{
  background-color:lightgrey;


}

</style>
