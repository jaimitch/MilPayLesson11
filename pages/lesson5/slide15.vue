<template>
  <div>
<h2>DoDFMR Vol 7A 010204</h2>

<h2>Members most recent entry on duty</h2>
<ul>
<li>Enlisted </li>
<ul><li>Date of enlistment</li></ul>
<li>Officers</li>
<ul><li>Date of acceptance of commission</li>
<li>Military Service School Graduates, date of graduation</li>
<li>Service in Public Health Service or Public Health Marine Hospital, date of acceptance of appointment</li></ul>
</ul>
<h2>Prior Creditable Service</h2>
<h2>Lost Time</h2>

  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'What is Creditable Service?'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>