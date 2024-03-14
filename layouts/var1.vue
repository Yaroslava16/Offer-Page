<template>
  <div>
    <Header>
      <template #logo>
        <img src="~assets/images/var-1/logo.svg" />
      </template>
    </Header>
    <main>
      <div>
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
colorMode.value = "light";

const localColorMode = ref(colorMode.value)

watchEffect(() => {
  if (colorMode.value === 'light') {
    document.body.classList.add('light-layout');
    document.body.classList.remove('dark-layout');
  } else {
    document.body.classList.add('dark-layout');
    document.body.classList.remove('light-layout');
  }
})

</script>

<style lang="scss">
  body.light-layout {
    min-height: 100vh;
    background: url('assets/images/var-1/bg.jpg') top/cover;
  }
</style>
