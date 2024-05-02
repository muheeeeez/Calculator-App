const app = Vue.createApp({
  data() {
    return {
      currentDisplayValue: "",
      operatorClicked: false,
      operator: null,
      previous: "",
    };
  },
  methods: {
    clear() {
      this.currentDisplayValue = "";
    },
    percent() {
      this.currentDisplayValue = this.currentDisplayValue / 100;
    },
    dot() {
      if (this.currentDisplayValue.indexOf(".") === -1) {
        this.numeric(".");
      }
    },
    numeric(number) {
      if (this.operatorClicked) {
        this.currentDisplayValue = "";
        this.operatorClicked = false;
      }
      this.currentDisplayValue += number;
      // this.currentDisplayValue = this.currentDisplayValue.concat(number);
    },
    setPrevious() {
      this.previous = this.currentDisplayValue;
      this.operatorClicked = true;
    },
    add(a, b) {
      this.operator = (a, b) => Number(a) + Number(b);
      
      this.setPrevious();
    },
    subtract(a, b) {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    divide(a, b) {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    multiply(a, b) {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    equal() {
      this.currentDisplayValue = this.operator(
        this.previous,
        this.currentDisplayValue
      ).toString();
    },
  },
});
app.mount("#calculator");
