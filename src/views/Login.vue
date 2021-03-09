<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-container class="login">
          <v-alert v-if="error"
                   color="red"
                   dismissible
                   elevation="4"
                   icon="mdi-account"
                   type="error"
          >Connection failed !
          </v-alert>
          <v-card
              class="overflow-hidden"
              color="secondary">
            <v-toolbar flat>
              <v-icon>mdi-account</v-icon>
              <v-toolbar-title class="font-weight-light">
                Login
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                  v-model="login"
                  color="white"
                  label="Login"
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  color="white"
                  label="Password"
                  type="password"
              ></v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="info"
                  @click="$router.push({name: 'Register'})">
                Register
              </v-btn>
              <v-btn
                  :disabled="!(password && login)"
                  color="success"
                  @click="authenticate">
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
const axios = require('axios');

export default {
  name: 'Login',
  data: function () {
    return {
      login: null,
      password: null,
      error: null
    }
  },
  methods: {
    authenticate: async function () {
      try {
        this.error = false
        const response = await axios.post(this.backAddress() + 'auth', {
          login: this.login,
          password: this.password
        })
        this.$data.token = response.data.token
        setTimeout(() => {
          this.$router.push({name: 'Home'})
        }, 100)
      } catch (e) {
        console.error(e);
        this.error = true;
      }
    }
  }
}
</script>

<style>
.login {
  max-width: 700px!important;
}
</style>
