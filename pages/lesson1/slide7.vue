<template>
  <div>
    <div class="row">
      <p>IPPS-A, a web-based Human Resources (HR) PeopleSoft (9.2) solution, is the vehicle that will allow the Army to transform from an industrial age personnel system to a 21st Century talent management system; IPPS-A integrates personnel and pay while providing three main capabilities: Total Force, Talent Management, and Auditability</p>
    </div>
    <div class="row">
      <div class="column">
        <h1>Current Environment</h1>
        <ul>
          <li>~200 HR/Pay Systems & over 650 interface and data exchanges between internal and external systems
          </li>
          <li>Not fully Information Assurance (IA) or Cyber Compliant</li>
          <li>Over 5,500 hours of system downtime in legacy systems</li>
          <li>Lack of data and process standardization across Components: leading to inefficiency, deviations and errors</li>
          <li>IMCOM alone works between 2,500 to 5,000 deviations per month</li>
        </ul>
      </div>
      <div class="column" style="max-width:8%"></div>

      <div class="column">
        <img src="../../assets/lesson1/Future_Environment.png" style="width:250px">
          <h1>Future Environment</h1>
        <div class="row">
          <div class="column">
            <h2>Modern Hardware</h2>
            <ul>
              <li>Mobile Capability</li>
              <li>Limited System Downtime</li>
              <li>Fully Accessible 24/7</li>
              <li>Fully IA and Cyber Compliant</li>
              <li>Subsumes over 30 Systems and eliminates over 300 Interfaces</li>
            </ul>
          </div>
          <div class="column">
            <h2>Modern Software</h2>
            <ul>
              <li>Modernized Business Rules, Roles, & Responsibilities</li>
              <li>154 Business Processes Reduced to 34</li>
              <li>Secure and Fully Auditable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'The Change - Systems Environment'
    }
  },
  created () {
        this.$store.commit('setCurrentSlideTitle',this.title)
  },
  components: {
  }
}
</script>