import './styles/lib.styl';
import { VGrid, VGridItem } from './components/VGrid';

export { VGrid, VGridItem };

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VGrid);
}

export default function (Vue, args) {
  Vue.use(VGrid, {
    components: {
      VGrid,
      VGridItem,
    },
    ...args,
  });
}
