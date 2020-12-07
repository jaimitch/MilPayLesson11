<template>
  <div>
      <h2>DoDFMR Vol 7A 261002</h2>
        <section>
            <ul>
                <li>Not assigned government family quarters</li>
                <li>Quarters not furnished for the dependents</li>
                    <ul>
                        <li>Prevented from accompanying member by orders</li>
                        <li>Do not accompany member to PDS</li>
                        <li>BAH rates based on median housing costs and is paid independently of a member’s actual housing costs</li></ul>
                <li>Single/divorced – maintains legal and physical custody</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'BAH W/Dep'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>