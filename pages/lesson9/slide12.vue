<template>
  <div>
<h2>DoDFMR Vol 7A 170203</h2>
<ul>
<li>Designed to recognize extended or excessive amounts of time outside of a service member’s PDS</li>

<li>The SecDef and Secretaries of the Military Services establish guidance for rotation norms</li>

<li>Only consecutive days in an operational deployment will count towards accumulation of days for HDP-T </li>

<li>$500 per month</li>
<ul>
<li>Prorated daily</li></ul>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'HDP-T'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>