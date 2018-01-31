Vue.component('item-text-input', {
  template: '<div>' +
    '<div class="form-group row">' +
    '  <label class="col-sm-2 col-form-label">{{ label }}</label>' +
    '  <div class="col-sm-6">' +
    '    <input type="text" class="form-control" @blur="updateTitle" v-model="textfield" v-bind:class="{ \'is-invalid\': !validation }" >' +
    '    <div v-show="!validation" v-bind:class="{ \'invalid-feedback\': !validation }">' +
    '      入力必須' +
    '    </div>' +
    '  </div>' +
    '</div>' +
    '</div>',
  props: {
    label: String
  },
  data: function () {
    return {
      textfield: ''
    };
  },
  methods: {
    updateTitle: function () {
      if(this.validation) {
        this.$emit('update-item', this.textfield);
      } else {
        this.$emit('update-item', '');
      }
    }
  },
  computed: {
    validation: function () {
      return this.textfield !== '';
    }
  }
});
