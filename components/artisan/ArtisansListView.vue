<template>
  <div>
        <b-row>
            <b-col align-self="end"  class="pb-3 pl-auto" cols="12">
          
                <b-button @click="$emit('changeComponent','NewArtisan')" class="">Create New</b-button>
             <hr>
            </b-col>
            <hr>
         <b-col v-for="(arti,i) in artisans" :key="i" cols="2">

            
           <b-button @click="$emit('changeComponent','ArtisanProfile')">Manage</b-button>
           
            <b-card
            title="Artisan Workshop"
            img-src="/img/pw.png"
            img-alt="Artisan Logo"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            
          >
          </b-card>
             
        
            
         </b-col>
          
        </b-row>
      
    
  </div>
</template>

<script>
import MyCompo from '~/components/MyComponent.vue'
  export default {
    name: 'artisans',
    components: {
      MyCompo
    },
    data() {
      return {
        artisans: [
          {
            name: 'my name'
          },
{
            name: 'my name'
          },
{
            name: 'my name'
          },
{
            name: 'my name'
          },
{
            name: 'my name'
          },
{
            name: 'my name'
          },
{
            name: 'my name'
          },
        ]
      }
    }
  }
</script>
<style <style lang="scss" scoped>

</style>
