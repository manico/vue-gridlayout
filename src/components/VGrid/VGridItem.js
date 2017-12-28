import { isUndefined } from '../../util';
import alignmentItemValues from '../../validation/alignmentItemValues';

const resolveSize = (input, span) => {
  if (Number.isInteger(input) && span) {
    return `span ${input}`;
  }

  return input;
};

export default {
  name: 'v-grid-item',
  props: {
    align: {
      type: String,
      validator(value) {
        return alignmentItemValues.indexOf(value) > -1;
      },
    },
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
    justify: {
      type: String,
      validator(value) {
        return alignmentItemValues.indexOf(value) > -1;
      },
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
    tag: {
      type: String,
      default: 'div',
      validator(value) {
        return value.length > 0;
      },
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
    const style = {
      alignSelf: this.align,
      justifySelf: this.justify,
      zIndex: this.stackIndex,
    };

    // Undefined properties do not produce good render
    if (!isUndefined(this.area)) style.gridArea = this.area;
    if (!isUndefined(this.gridColumnStart)) style.gridColumnStart = this.gridColumnStart;
    if (!isUndefined(this.gridColumnEnd)) style.gridColumnEnd = this.gridColumnEnd;
    if (!isUndefined(this.gridRowEnd)) style.gridRowEnd = this.gridRowEnd;
    if (!isUndefined(this.gridRowStart)) style.gridRowStart = this.gridRowStart;

    return h(this.tag, {
      style,
    }, this.$slots.default);
  },
};
