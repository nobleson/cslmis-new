<template>
  <div class="animated fadeIn">
        <component @changeComponent="changeCurrentComponent" :is="currentComponent"></component>
  </div>
</template>

<script>
import PhysicalFacility from '~/components/facility/PhysicalFacility.vue'
import TrainersFacility from '~/components/facility/TrainersFacility.vue'
import SupportStaffFacility from '~/components/facility/SupportStaffFacility.vue'
import MassonaryEquipmentFacility from '~/components/facility/MassonaryEquipmentFacility.vue'
import CapentryEquipmentFacility from '~/components/facility/CapentryEquipmentFacility.vue'
import SurveyEquipmentFacility from '~/components/facility/SurveyEquipmentFacility.vue'
import MeasuringEquipmentFacility from '~/components/facility/MeasuringEquipmentFacility.vue'
export default {
  components: {
    PhysicalFacility,
    TrainersFacility,
    SupportStaffFacility,
    MassonaryEquipmentFacility,
    CapentryEquipmentFacility,
    SurveyEquipmentFacility,
    MeasuringEquipmentFacility
  },
  data() {
    return {
      currentComponent: 'PhysicalFacility'
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
