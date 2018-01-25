$(function () {
  new Vue({
    el: '#product-form',
    data: {
      product: {
        title: '',
        price: 0
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
