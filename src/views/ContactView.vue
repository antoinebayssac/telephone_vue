<template>
  <div>
    <h1>Contacts</h1> 
      <ul>
      <li v-for="contact in contacts" :key="contact.id">
        {{ contact.firstName }} {{ contact.lastName }} - {{ contact.phoneNumber }}
        <button v-on:click="addCall">Appeler</button>
      </li>
    </ul>
<<<<<<< HEAD
    <button @click="showModal = true">Ajouter un contacte</button>
=======
    <button @click="showModal = true">Ajouter un contact</button>
>>>>>>> main
    <Modal :show="showModal" @close="showModal = false" @submit="addContact">
  <template v-slot:header>Ajouter un contact</template>
  <template v-slot:default>
    <form>
      <label>
        Prénom:
        <input v-model="newContact.firstName" />
      </label>
      <label>
        Nom:
        <input v-model="newContact.lastName" />
      </label>
      <label>
        Numéro de téléphone:
        <input v-model="newContact.phoneNumber" />
      </label>
    </form>
  </template>
</Modal>
  </div>
</template>

<script>
import Modal from '@/components/ModalComponents'
import { mapState } from 'vuex'


export default {
  components: {
    Modal,
  },
  computed: {
    ...mapState(['contacts']),
  },
  data() {
    return {
      showModal: false,
      newContact: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
      },
    }
  },
  methods: {
    addContact() {
      this.$store.commit('addContact', { firstName: this.newContact.firstName, lastName: this.newContact.lastName, phoneNumber: this.newContact.phoneNumber })
      this.showModal = false
    },

    addCall() {
            let callHistory = { firstname: this.newContact.firstName, lastname: this.newContact.lastName, phonenumber: this.newContact.phoneNumber }
            console.log(callHistory)
            this.$store.commit('AddCall', callHistory)
    }
  },
}
</script>

<style scoped>

h1 {
  text-align: center;
  font-size: 3em;
  margin-bottom: 2em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 1em;
  border-bottom: 1px solid #ccc;
}

button {
  padding: 0.5em 1em;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0.5em;
  font-size: 1em;
  cursor: pointer;
  margin-top: 2em;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>

