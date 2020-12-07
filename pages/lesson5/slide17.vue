<template>
  <div>


<h2>DoDFMR Vol 7A 010201 C</h2>
<ul>
<li>Regular Service; Army, Navy, Marine Corps Air Force, or Coast Guard</li>

<li>Army, Navy, Marine Corps, Air Force, and Coast Guard Reserve</li>

<li>Army National Guard </li>

<li>Nurse Corps and Nurse Corps Reserve of the Public Health Service </li>

<li>Public Health Service and Reserve Corps of the Public Health Service </li>

<li>Army of the United States (service without specification of a component)</li>
</ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Creditable Service Without Restrictions'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>