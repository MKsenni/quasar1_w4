<script lang="ts">
import { defineComponent } from "vue";
import registerActionButton from "msComponents/registerActionButton";
import registerDateRangePicker from "msComponents/registerDateRangePicker";

registerActionButton("action-button");
registerDateRangePicker("date-range-picker");
export default defineComponent({
  name: "SecondPage",
});
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <action-button label="first action btn" />
    <date-range-picker />
    <action-button label="second action btn" />
  </q-page>
</template>

<style scoped lang="sass"></style>
