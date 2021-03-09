<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-container class="register">

          <v-alert v-if="alert"
                   :color="alert.color"
                   dismissible
                   elevation="4"
                   :icon="alert.icon"
                   :type="alert.type"
          >{{ alert.message }}
          </v-alert>
          <v-card
              class="overflow-hidden"
              color="secondary">
            <v-toolbar flat>
              <v-icon>mdi-account</v-icon>
              <v-toolbar-title class="font-weight-light">
                Register
              </v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                  v-model="login"
                  color="white"
                  label="Enter your login"
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  color="white"
                  label="Enter your password"
                  type="password"
              ></v-text-field>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="info"
                  @click="$router.push({name: 'Login'})">
                Login
              </v-btn>
              <v-btn
                  :disabled="!(password && login)"
                  color="success"
                  @click="register">
                Register
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: 'Register',
  data: function () {
    return {
      login: null,
      password: null,
      alert: null
    }
  },
  methods: {
    register: async function () {
      try {
        this.alert = null;
        const response = await axios.post(this.backAddress() + 'users', {
          login: this.login,
          password: this.password
        })
        if (response.data) {
          this.alert = {
            color: 'green',
            icon: 'mdi-check',
            message: 'Congrats, you can now login to the app !',
            type: 'success'
          }
        }
      } catch (e) {
        console.error(e);
        this.alert = {
          color: 'red',
          icon: 'mdi-close',
          message: 'Oops, an error occured...',
          type: 'error'
        }
      }
    }
  }
}
</script>

<style>
.register {
  max-width: 700px!important;
}
</style>
