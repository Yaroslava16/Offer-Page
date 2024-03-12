<template>
  <div v-if="initialized">
    <NuxtLayout :name="selectedVariant">
      <template #default>
        <div v-if="selectedVariant === 'var1'">
          <ContentBlockVar1 />
        </div>
        <div v-else>
          <ContentBlockVar2 />
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup>
const router = useRouter();
const variants = ['var1', 'var2'];
const selectedVariant = ref(null);
const initialized = ref(false);

const initializeVariant = () => {
  const savedVariant = localStorage.getItem('abtest');
  if (savedVariant && variants.includes(savedVariant)) {
    selectedVariant.value = savedVariant;
  } else {
    selectedVariant.value = variants[Math.floor(Math.random() * variants.length)];
    localStorage.setItem('abtest', selectedVariant.value);
  }
  
  if (router) {
    router.replace({ query: { abtest: selectedVariant.value } });
  }
  initialized.value = true;
};

onMounted(initializeVariant);
</script>
