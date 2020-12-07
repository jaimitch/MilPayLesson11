<template>
  <div>

<h2>DoDFMR Vol 7A 010202</h2>
<ul>
<li>Enlistments terminated, voided, or invalidated as fraudulent</li>
<li>Reserve Officer Training Corps (ROTC)</li>
<li>Time (after 9/14/1981) enrolled in Armed Forces Health Professional Scholarship and Financial Assistance Program or student at the Uniformed Services University of Health Sciences </li>

<li>Delayed Entry Program</li>
<ul>
<li>1 Jan 85 thru 28 Nov 89</li>
<li>29 Nov 89 to current not in a drill status</li>
</ul></ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Service Not Creditable'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>