import VGrid from './VGrid';
import VGridItem from './VGridItem';

export { VGrid, VGridItem };

VGrid.install = function install(Vue) {
  Vue.component(VGrid.name, VGrid);
  Vue.component(VGridItem.name, VGridItem);
};

export default VGrid;
