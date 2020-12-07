<template>
  <div>
        <section>
            <ol>
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