<template>
  <div>
      <div class="number">
          <p>Numéro : </p>{{ phoneNumber }}
      </div>
      <div class="name">
          <p>Nom : </p>{{ contactName }}
      </div>
      <div class="keypad">
          <button v-for="(num, index) in numbers" v-bind:key="index" @click="addNumber(num)">{{ num }}</button>
          <button @click="removeNumber">&#8592;</button>
      </div>
      <div class="keypad_2">
        <button @click="addCall">Appeler</button>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
      return {
          phoneNumber: '',
          numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      }
  },
  computed: {
      ...mapState(['contacts']),
      contactName() {
          const contact = this.contacts.find(c => c.phoneNumber === this.phoneNumber)
          return contact ? `${contact.firstName} ${contact.lastName}` : 'Inconnu'
      }
  },
  methods: {
      addNumber(num) {
          this.phoneNumber += num
      },
      removeNumber() {
          this.phoneNumber = this.phoneNumber.slice(0, -1)
      },
      addCall() {
          const contact = this.contacts.find(c => c.phoneNumber === this.phoneNumber)
          const call = { 
              firstname: contact ? contact.firstName : 'Inconnu',
              lastname: contact ? contact.lastName : '',
              phonenumber: this.phoneNumber,
          }
          this.$store.commit('AddCall', call)
      }
  }
}
</script>

<style scoped>

.keypad {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
justify-items: center;
align-items: center;
margin: 20px auto;
width: 300px;
}

.keypad button {
font-size: 2rem;
padding: 20px;
background-color: #f5f5f5;
border-radius: 50%;
border: none;
transition: all 0.2s ease-in-out;
}
.keypad button:active {
background-color: #ccc;
transform: scale(0.95);
}

.keypad_2 {
justify-items: center;
align-items: center;
margin: 20px auto;
width: 300px;
}

.keypad_2 button {
font-size: 2rem;
padding: 20px;
background-color: #f5f5f5;
border-radius: 50%;
border: none;
transition: all 0.2s ease-in-out;
}
.keypad_2 button:active {
background-color: #ccc;
transform: scale(0.95);
}

.number{
  font-size: 1.3em;
}

.name {
  margin-top: 20px;
  font-size: 1.3em;
}

</style>
