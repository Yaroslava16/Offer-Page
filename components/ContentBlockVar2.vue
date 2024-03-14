<template>
  <div class="flex justify-between pt-75px max-w-[980px] mx-auto md:py-16">
    <TitleAndAction
      class="max-w-[473px]"
      :mainTitle="mainTitle"
      :description="description"
      :btnText="btnText"
    />
  </div>
</template>

<script setup>
  const mainTitle = '<span class="text-blue-200">Start</span> your learning journey <span class="text-blue-200">now</span>';
  const description = 'Get a <span class="text-blue-200 font-extrabold">Smart</span><span class="font-extrabold">Study</span> plan to rock self-learning';
  const btnText = 'Get my plan';
</script>