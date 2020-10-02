<template>
  <enter-page>
    <template v-slot:head-text>
      Welcome! Create your Account
    </template>
    <template v-slot:form-body>

      <form class="mt-0">

        <div class="field">
          <div class="control level is-size-7">
            <label class="radio level-left">
              <input type="radio" name="role" value="coordinator" v-model="role">
              Coordinator
            </label>
            <label class="radio level-right">
              <input type="radio" checked name="role" value="respondant" v-model="role">
              Respondant
            </label>
          </div>
        </div>

        <div class="field is-size-6">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" v-model="name" placeholder="Input Name">
          </div>
        </div>

        <div class="field is-size-6">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" v-model="email" placeholder="Input Email" value="hello@">
          </div>
        </div>

        <div class="field is-size-6">
          <label class="label">Phone Number</label>
          <div class="control">
            <input class="input" type="number" v-model="pnumber" placeholder="Input Phone Number">
          </div>
        </div>
        
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" v-model="password" placeholder="Enter Password">
          </div>
        </div>

        <div class="field is-size-6">
          <label class="label">Address</label>
          <div class="control">
            <input class="input" type="address" v-model="address" placeholder="Input Address">
          </div>
        </div>

        <label class="checkbox">
          <input type="checkbox" v-model="agree" checked>
          Creating an account Agree with the Terms of Service, Privacy Policy
        </label>

        <div class="field level is-grouped">
          <div class="control level-item my-3">
            <button type="submit" class="button prim" @click.prevent="toLogin">Submit</button>
          </div>
        </div>
        
        <h6 class="my-4">Existing User?</h6>

        <div class="field level is-grouped">
          <div class="control level-item my-4">
            <router-link to="/login">
              <strong class="text-color">Login</strong>
            </router-link>
          </div>
        </div>

      </form>
    </template>
  </enter-page>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import axios from 'axios'
import EnterPage from '../components/EnterPage'

export default defineComponent({
  components: {
    EnterPage
  },
  data() {
    return {
      role: null,
      name: '',
      email: '',
      pnumber: '',
      password: '',
      address: '',
      agree: true,
      error: false
    }
  },
  methods: {
    toLogin () {
      if (this.name.length && this.email.length && this.pnumber.length && this.password.length && this.address.length) {
        console.log('run this shit here')
        console.log(this.role)
        axios.post('https://app.ezoneerp.com/api/v1/auth/register', {
          "address": this.address,
          "email": this.email,
          "id": 0,
          "name": this.name,
          "password": this.password,
          "phoneNumber": this.pnumber,
          "role": this.role,
          "uuid": '1'
        })
        .then(function (response) {
          console.log(response);
          
        })
        .catch(function (error) {
          console.log(error);
        });
      } else {
        alert('Fill all fields')
      }
    }
  }
  // setup() {
  //   let error = ref(false)
  //   const data = reactive({
  //     name: null,
  //     email: null,
  //     pnumber: null,
  //     password: null,
  //     address: null
  //   })
  //   const toLogin = () => {
  //     console.log(error)
  //     error = !error
  //   }
  //   return {
  //     error,
  //     data,
  //     toLogin
  //   }
  // }
})
</script>

<style lang="scss" scoped>
.text-color {
  color: #042E9A;;
}
.prim {
  background: #4512D2;
  color: #ffffff;
}
.button {
  border-radius: 0;
  width: 100%;
}

h6 {
  overflow: hidden;
  text-align: center;
}

h6:before,
h6:after {
  background-color: #7A7A7A;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

h6:before {
  right: 0.5em;
  margin-left: -50%;
}

h6:after {
  left: 0.5em;
  margin-right: -50%;
}
</style>
