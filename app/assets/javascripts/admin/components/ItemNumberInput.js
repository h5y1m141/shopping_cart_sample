Vue.component('item-number-input', {
  template: '<div>' +
    '<div class="form-group row">' +
    '  <label class="col-sm-2 col-form-label">{{ label }}</label>' +
    '  <div class="col-sm-6">' +
    '    <input type="text" class="form-control" @blur="updatePrice" v-model="numberField" v-bind:class="{ \'is-invalid\': !validation }" >' +
    '    <div v-show="!validation" v-bind:class="{ \'invalid-feedback\': !validation }">' +
    '      金額を入力してください。' +
    '    </div>' +
    '  </div>' +
    '</div>' +
    '</div>',
  props: {
    label: String
  },
  data: function () {
    return {
      numberField: 0
    };
  },
  methods: {
    updatePrice: function () {
      if(this.validation) {
        this.$emit('update-item', this.numberField);
      } else {
        this.$emit('update-item', 0);
      }
    }
  },
  computed: {
    validation: function () {
      return this.numberField > 0 && Number(this.numberField);
    }
  }
});
