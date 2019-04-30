<template>
  <div class="animated fadeIn">
        <component @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import ArtisanProfile from '~/components/artisan/ArtisanProfile.vue'
import ArtisansListView from '~/components/artisan/ArtisansListView.vue'
import NewArtisan from '~/components/artisan/NewArtisan.vue'
export default {
  components: {
    ArtisanProfile,
    ArtisansListView,
    NewArtisan
  },
  data() {
    return {
      currentComponent: 'ArtisansListView'
    }
  },
  methods: {
    changeCurrentComponent(newComponent) {
      this.currentComponent = newComponent;
    }
  }
}
</script>
<style <style lang="scss" scoped>

</style>
