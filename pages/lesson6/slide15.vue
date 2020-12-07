<template>
  <div>
      <h2>DoDFMR Vol 7A 261001</h2>
        <section>
            <ul>
                <li>Based upon Soldier's assignment/PDS</li>
                <li>Grade E-7 and above may elect not to occupy Gov’t QTRS</li>
                <li>Grade E-6 may elect not to occupy Gov’t QTRS (per housing policy for the Soldier’s PDS)</li>
            </ul>
        </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'BAH W/O Dep'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>