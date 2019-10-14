<template>
  <div>Register</div>
</template>

<script>
export default {
  methods: {
    async register () {
      const payload = {
        name: 'Bernard Nandwa',
        email: 'hello4@nandwa.com',
        password: 'pass123*',
        password_confirmation: 'pass123*'
      }

      await this.$axios.$post('/api/v1/register', payload).then(
        function (response) {
        // Log in the user
        }
      ).catch(function (error) {
        console.log(error.response)
      })
    }
  }
}
</script>
