<template>
  <div v-if="show" @click.self="close" class="modal-overlay">
    <div class="modal-content" @click.stop>
      <header>
        <slot name="header"></slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <footer>
        <button @click="$emit('submit')">Ajouter</button>
        <button @click="close">Annuler</button>
      </footer>
    </div>
  </div>
</template>
<script>

export default {
  name: "ModalComponents",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
  
<style>

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  
  .modal-content {
    background-color: #fff;
    padding: 2em;
    border-radius: 0.5em;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    width: 50%;
    max-height: 80%;
    overflow: auto;
  }

  .modal-content label {
    font-weight: bold;
    margin-bottom: 0.5em;
    display: block;
}

.modal-content input {
    border: 1px solid #ccc;
    border-radius: 0.25em;
    padding: 0.5em;
    width: 100%;
    box-sizing: border-box;
}

.modal-content button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 0.5em 1em;
    border: none;
    border-radius: 0.25em;
    cursor: pointer;
    margin-top: 1em;
    width:100%;
}

  
  .modal-content header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1em;
  }
  
  .modal-content header h2 {
    margin: 0;
  }
  
  .modal-content header button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
  }
  
  .modal-content section {
    margin-bottom: 1em;
  }

  .modal-content footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1em;
    padding-top: 1em;
    border-top: 1px solid #ddd;
}

.modal-content footer button {
    padding: 0.5em 1em;
    margin-left: 1em;
    border-radius: 0.2em;
    cursor: pointer;
    font-size: 1em;
}

.modal-content footer button:first-of-type {
    background-color: #4CAF50;
    color: white;
}

.modal-content footer button:last-of-type {
    background-color: #f44336;
    color: white;
}

</style>

  