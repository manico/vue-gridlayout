const resolveSize = (input, span) => {
  if (Number.isInteger(input) && span) {
    return `span ${input}`;
  }

  return input;
};

export default {
  name: 'v-grid-item',
  props: {
    area: {
      type: String,
    },
    columnStart: {
      type: [Number, String],
    },
    columnStartSpan: {
      type: Boolean,
      default: false,
    },
    columnEnd: {
      type: [Number, String],
    },
    columnEndSpan: {
      type: Boolean,
      default: false,
    },
    rowStart: {
      type: [Number, String],
    },
    rowStartSpan: {
      type: Boolean,
      default: false,
    },
    rowEnd: {
      type: [Number, String],
    },
    rowEndSpan: {
      type: Boolean,
      default: false,
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
    gridColumnStart() {
      return resolveSize(this.columnStart, this.columnStartSpan);
    },
    gridColumnEnd() {
      return resolveSize(this.columnEnd, this.columnEndSpan);
    },
    gridRowStart() {
      return resolveSize(this.rowStart, this.rowStartSpan);
    },
    gridRowEnd() {
      return resolveSize(this.rowEnd, this.rowEndSpan);
    },
  },
  methods: {
  },
  render(h) {
    return h('div', {
      style: {
        gridArea: this.area,
        gridColumnStart: this.gridColumnStart,
        gridColumnEnd: this.gridColumnEnd,
        gridRowStart: this.gridRowStart,
        gridRowEnd: this.gridRowEnd,
        zIndex: this.stackIndex,
      },
    }, this.$slots.default);
  },
};
