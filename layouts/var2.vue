<template>
  <div>
    <Header>
      <template #logo>
        <img src="~assets/images/var-2/logo.svg" />
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
colorMode.value = "dark";


const localColorMode = ref(colorMode.value)

watchEffect(() => {
  if (colorMode.value === 'dark') {
    document.body.classList.add('dark-layout');
    document.body.classList.remove('light-layout');
  } else {
    document.body.classList.add('dark-layout');
    document.body.classList.remove('light-layout');
  }
})

</script>

<style lang="scss">
body.dark-layout {
  min-height: 100vh;
  background: url('assets/images/var-2/bg.jpg') top/cover;
}
</style>
