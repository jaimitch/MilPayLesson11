<template>
  <div>

<h2>Drill Sergeant (DS) and Advanced Individual Training (AIT) Platoon Sergeant (PSG) Tour Extension Program</h2>
<ul>
<li>The Soldier must be recommended for and selected for extension by their Battalion and Brigade Chain of Command</li>

<li>The maximum monthly rate payable will not exceed $500</li>

<li>Soldiers are not authorized more than 12 monthly payments</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Army AIP Programs cont.'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>