<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <action-button label="wwwooooooooooooowwwwwwwwwwwwww" />
    </div>
    <!--    <test-button label="yehhhhhh" />-->
    <date-range-picker />
    <action-button label="second btn" />
  </q-page>
</template>

<script lang="ts">
import Vue from "vue";
// import testRegisterWebComponent from "testComponents/testRegisterWebComponent";
import registerActionButton from "msComponents/registerActionButton";
import registerDateRangePicker from "msComponents/registerDateRangePicker";

// testRegisterWebComponent("test-button");
registerActionButton("action-button");
registerDateRangePicker("date-range-picker");

export default Vue.extend({
  name: "PageIndex",
});
</script>
