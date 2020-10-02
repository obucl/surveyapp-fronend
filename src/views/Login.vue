<template>
  <enter-page>
    <template v-slot:head-text>
      Welcome! Login into your Account 
    </template>
    <template v-slot:form-body>
      <form>

        <div class="field">
          <div class="control level is-size-7">
            <label class="radio level-left">
              <input type="radio" name="role">
              Coordinator
            </label>
            <label class="radio level-right">
              <input type="radio" name="role">
              Respondant
            </label>
          </div>
        </div>
        <div>{{ info }}</div>

        <div class="field is-size-6">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" v-model="email" placeholder="Input Email" value="hello@">
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" v-model="password" placeholder="Enter Password">
          </div>
        </div>

        <div class="field level">
          <span class="level-left"></span>
          <span class="level-right is-size-6 text-color">
            forgot password?
          </span>
        </div>

        <div class="field level is-grouped">
          <div class="control level-item my-3">
            <button type="submit" class="button prim">Submit</button>
          </div>
        </div>
        
        <h6 class="my-4">New user</h6>

        <div class="field level is-grouped">
          <div class="control level-item my-3">
            <router-link to="/signup">
              <strong class="text-color">Create Account</strong>
            </router-link>
          </div>
        </div>

      </form>
    </template>
  </enter-page>
</template>

<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
// import { useRouter } from 'vue-router'
import EnterPage from '../components/EnterPage'
import axios from 'axios'

export default defineComponent({
  components: {
    EnterPage
  },
  // data () {
  //   return {
  //     info: null
  //   }
  // },
  mounted() {
    // let info = ref(null)
    axios
    .get('https://app.ezoneerp.com/api/v1/auth/register')
    .then(response => (console.log(response)))
    // console.log(info)

    // return {
    //   info
    // }
  },
  setup() {
    const data = reactive({
      email: null,
      password: null
    })
    // const createAccount = userCreate(data)
    return {
      ...toRefs(data)
      // createAccount
    }
  }
})
// function userCreate() {
//   return async ({ email, password } = {}) => {
//     try {
//       const { data } = await axios.post('https://app.ezoneerp.com/api/v1/auth/register', {
//         email,
//         password
//       })
//     } catch (error) {
//       throw error
//     }
//   }
// }
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
