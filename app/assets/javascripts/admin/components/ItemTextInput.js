Vue.component('item-text-input', {
  template: '<div>' +
    '<div class="form-group row">' +
    '  <label class="col-sm-2 col-form-label">{{ label }}</label>' +
    '  <div class="col-sm-6">' +
    '    <input type="text" class="form-control" @blur="update" v-model="textfield" v-bind:class="{ \'is-invalid\': !validation }" >' +
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
    update: function () {
      if(this.validation) {
        var obj = {
          title: this.textfield
        };
        this.$emit('update-item', obj);
      }
    }
  },
  computed: {
    validation: function () {
      return this.textfield !== '';
    }
  }
});
