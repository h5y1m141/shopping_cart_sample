$(function () {
  new Vue({
    el: '#product-form',
    data: {
      product: {
        title: '',
        price: 0
      }
    },
    methods: {
      updateProduct: function (item) {
        if(item.title) {
          this.product.title = item.title;
        }
      }
    },
    computed: {
      disableSubmitButton: function () {
        return this.validation ? false : true;
      },
      validation: function () {
        return this.product.title !== '' && this.product.price !== 0;
      }
    }
  })
});
