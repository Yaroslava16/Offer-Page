<template>
  <button
    :class="mainButton"
    :disabled="disabled"
    @click="handleClick">
    <img v-if="showImage" :src="imageSrc" alt="Button Image" />
    <span v-if="showText">{{ btnText }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "default",
    validator: (value) =>
      ["default", "type-1", "type-2", "type-3"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  btnText: {
    type: String,
    default: '',
  },
  imageSrc: {
    type: String,
    default: '',
  },
});

const emits = defineEmits(["click"]);

const mainButton = computed(() => {
  const typeClasses = {
    default: "mainButton__default",
    'type-1': "mainButton__type-1",
    'type-2': "mainButton__type-2",
    'type-3': "mainButton__type-3",
  };
  return `btn ${typeClasses[props.type]} ${props.disabled ? 'disabled' : ''}`;
});

const handleClick = () => {
  emits("click");
};

const showText = computed(() => !!props.btnText);
const showImage = computed(() => !!props.imageSrc);
</script>

<style lang="scss">
.mainButton {
  &__default {
    @apply h-[56px]
    font-bold 
    bg-black
    text-white
    hover:bg-green-100
    transition-colors
    dark:bg-white
    dark:text-blue-500
    dark:hover:bg-blue-300
    dark:hover:text-white;
  }

  &__type-1 {
    @apply 
    h-[56px]
    font-bold
    bg-orange-200
    uppercase
    text-black hover:bg-orange-300 transition-colors;

    img {
      @apply
      mr-2.5;
    }
  }

  &__type-2 {
    @apply 
    h-[56px] 
    font-bold 
    text-black
    bg-white
    border-[1px]
    dark:border-[0px] 
    uppercase
    transition-colors
    dark:text-black dark:hover:text-white border-gray-300
    hover:text-white hover:bg-black;

    border-color: #CDCDCD;

    img {
      @apply
      mr-2;
    }
  }
}
</style>
