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
  const mainTitle = 'Start your learning journey now';
  const description = 'Get a <span class="text-orange-100 font-extrabold">Planet</span><span class="font-extrabold">Learn</span> plan to rock self-learning';
  const btnText = 'Get my plan';
</script>