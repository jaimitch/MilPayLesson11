<template>
<div>
    <router-view />
</div>
</template>

<script>
import Header from './components/header/Header'

export default {
  components: {
    'milpay-header': Header 
  }
}
</script>