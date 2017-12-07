export default {
  name: 'v-grid',
  props: {
    autoColumns: {
      type: String,
    },
    autoRows: {
      type: String,
    },
    autoRowsMin: {
      type: String,
      default: 'auto',
    },
    autoRowsMax: {
      type: String,
      default: 'auto',
    },
    columnGap: {
      type: String,
    },
    gap: {
      type: [String, Array],
    },
    rowGap: {
      type: String,
    },
    templateColumns: {
      type: [String, Array],
    },
    templateRows: {
      type: [String, Array],
    },
  },
  data() {
    return {
    };
  },
  computed: {
    gridAutoRows() {
      if (this.autoRowsMin !== 'auto' || this.autoRowsMax !== 'auto') {
        return `minmax(${this.autoRowsMin}, ${this.autoRowsMax})`;
      }

      return this.autoRows;
    },
    gridGap() {
      if (this.rowGap && this.columnGap) {
        return `${this.rowGap} ${this.columnGap}`;
      }

      return this.gap;
    },
    gridTemplateColumns() {
      if (this.templateColumns) {
        const isArray = this.templateColumns instanceof Array;
        return isArray ? this.templateColumns.join(' ') : this.templateColumns;
      }

      return null;
    },
  },
  methods: {
  },
  render(h) {
    return h('div', {
      class: ['grid'],
      style: {
        gridAutoColumns: this.autoColumns,
        gridAutoRows: this.gridAutoRows,
        gridGap: this.gridGap,
        gridTemplateColumns: this.gridTemplateColumns,
        gridTemplateRows: this.gridTemplateRows,
      },
    }, this.$slots.default);
  },
};
