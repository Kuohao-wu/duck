<template>
  <span>
    <input v-model="currentValue" type="checkbox" :id="id" :name="name" :value="optValue" v-if="type === 'checkbox'">
    <input v-model="currentValue" type="radio" :id="id" :name="name" :value="optValue" v-else>
    <label :for="id"><slot></slot></label>
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'group'
    },
    id: {
      type: String,
      default: '',
      require: true
    },
    type: {
      type: String,
      require: true
    },
    value: {
      type: [String, Array],
      require: true
    },
    optValue: {
      type: String
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.currentValue = val
    }
  }
}
</script>

<style>
  input {
    position: relative;
    left: -999em;
  }
  .checked {
    color:green;
  }
</style>
