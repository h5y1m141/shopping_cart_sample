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
      updateTitle: function (title) {
        this.product.title = title;
      },
      updatePrice: function (price) {
        this.product.price = price;
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
