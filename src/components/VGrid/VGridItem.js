export default {
  name: 'v-grid-item',
  props: {
    columnStart: {
      type: Number,
    },
    columnEnd: {
      type: Number,
    },
    rowStart: {
      type: Number,
    },
    rowEnd: {
      type: Number,
    },
    stackIndex: {
      type: Number,
    },
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  render(h) {
    return h('div', {
      class: ['grid-item'],
      style: {
        gridColumnStart: this.columnStart,
        gridColumnEnd: this.columnEnd,
        gridRowStart: this.rowStart,
        gridRowEnd: this.rowEnd,
        zIndex: this.stackIndex,
      },
    }, this.$slots.default);
  },
};
