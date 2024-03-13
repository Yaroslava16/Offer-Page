import { useContext } from '@nuxtjs/composition-api';

export default function useColorMode() {
  const { colorMode } = useContext();
  return {
    colorMode,
  };
}