<template>
  <div>
      <h2>DoDFMR Vol 7A 250204</h2>
        <section>
            <ul>
                <li>A member being paid BAS for all meals or rations provided by or on behalf of the government</li>
                <li>Does not apply when:</li>
                    <ul>
                        <li>On official leave</li>
                        <li>In a PCS status</li>
                        <li>In the hospital</li>
                        <li>On temporary duty, other than temporary duty requiring mandatory collection for meal</li>
                    </ul>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Meal Deductions'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>