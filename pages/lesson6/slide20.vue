<template>
  <div>
      <h2>USAR Pam 37-1, CH 3-21(b)</h2>
        <section>
            <ul>
                <li>The length and type of duty determine whether a duty period is PCS or TDY and BAH type the Soldier receives</li>
            </ul>
        </section>
        <img>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Effect of Tour Length for Reserve BAH'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>