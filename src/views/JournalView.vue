<template>
  <div>
    <ul>
      <li v-for="callHistorys in callHistory" :key="callHistorys.firstname">
          <p>Tu as appelé {{ callHistorys.firstname }} {{ callHistorys.lastname }} - Numéro : {{ callHistorys.phonenumber }}</p>
          <button @click="reCall(callHistorys.phonenumber)">Rappeler</button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    callHistory(){
      return this.$store.state.callHistory
    }
  },
  methods: {
    reCall(phoneNumber) {
      const contact = this.$store.state.contacts.find(c => c.phoneNumber === phoneNumber)
      const call = { 
        firstname: contact ? 'Vous avez rappelé ' + contact.firstName : 'Vous avez rappelé Inconnu',
        lastname: contact ? contact.lastName : '',
        phonenumber: phoneNumber,
      }
      this.$store.commit('AddCall', call)
    }
  },
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
}

p {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
}
</style>
