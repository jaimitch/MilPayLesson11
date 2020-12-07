<template>
  <div>
<ul>
<li>Parachute Duty </li>

<li>Flight Deck Duty</li>

<li>Demolition Duty</li>

<li>Experimental Stress Duty </li>

<li>Toxic Fuels (or propellants) Duty </li>

<li>Toxic Pesticides Duty</li>

<li>Dangerous Viruses (or bacteria) Lab duty</li>

<li>Chemical Munitions Duty</li>

<li>Maritime Visit, Board, Search, Seizure Duty</li>

<li>Polar Region Flight Operations Duty</li>

<li>Weapons of Mass Destruction Civil Support Team</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Hazardous Duty Incentive Pay (HDIP)'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>