import { use } from 'react';
import { ConfigContext } from 'contexts/ConfigContext';

export default function useConfig() {
  return use(ConfigContext);
}
