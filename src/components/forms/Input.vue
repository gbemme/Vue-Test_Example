<template>
  <div>
    <input id="myInput" v-model="textInputData" type="text" />
    <button id="btn" @click="onSubmit">submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInputData: '',
      newInput:'',
    };
  },
  methods: {
    onSubmit() {
      return (this.newInput = this.textInputData);
      // this.$emit('submitted', this.textInputData);
    },
  },
};
</script>

<style></style>
