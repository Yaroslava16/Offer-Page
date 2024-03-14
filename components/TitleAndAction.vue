<template>
  <div>
    <h1 v-html="mainTitle" />
    <p class="description max-w-[380px]" v-html="description" />
    <Button
      type="default"
      class="mb-8 w-full md:mb-0 md:w-[273px]"
      :btnText="btnText"
    />
  </div>
</template>

<script setup>
  const props = defineProps({
    mainTitle: String,
    description: String,
    btnText: String,
  });
</script>
