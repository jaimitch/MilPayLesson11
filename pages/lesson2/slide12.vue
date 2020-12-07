<template>
  <div>
        <section>
            <ol>
                <li>What regulation prescribes military pay policy and procedures?</li>
                <li>How do you recite “040207C.1 (a)”?</li>
                <li>Where in the DoDFMR would you determine that an Airforce Master Sergeant is the same pay grade as an Army Sergeant First Class?</li>
                <li>When a Soldier’s marriage is annulled; can they still receive BAH w/dep? Where is it found?</li>
                <li>A member without dependents who is ordered PCS to confinement in the brig is entitled to what type of BAH? Which table is it located?</li>
            </ol>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Check on Learning'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>