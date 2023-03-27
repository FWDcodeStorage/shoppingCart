<template>
  <div class="cartItem-container">
    <div>
      <Product :product="product" />
    </div>
    <div class="quantity">
        <div class="btns">
            <div class="q-btn">
      <button @click="changeQuantity()">+</button>
    </div>
    <div class="p">
      <p>{{ itemQuantity }}</p>
    </div>
    <div class="q-btn">
      <button @click="changeQuantity('decrease')">-</button>
    </div>
        </div>
        <div class="remove">
      <a @click="removeItem()">Remove Item</a>
    </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import Product from "./Product.vue";

export default {
  name: "CartItem",
  props: ['product'],
  components: {
    Product
  },

  setup(props) {
    const store = useStore();

    let cart = computed(function () {
      return store.state.cart;
    });

    let itemQuantity = computed(function () {
      let get_product = cart.value.filter((item) => item.id == props.product.id);
      return get_product[0].quantity;
    });

    function changeQuantity(action = "add") {
      if (action == "add") {
        props.product.quantity = props.product.quantity + 1;
        store.commit("updateCartitem", props.product);
      } else {
        if (props.product.quantity > 1) {
          props.product.quantity = props.product.quantity - 1;
          store.commit("updateCartitem", props.product);
        } else {
          //remove
          store.commit("removeCartitem", props.product);
        }
      }
    }

    function removeItem() {
      store.commit("removeCartItem", props.product);
    }

    return {
      cart,
      itemQuantity,
      changeQuantity,
      removeItem,
    };
  },
};
</script>

<style lang="scss">
.cartItem-container{
    display: flex;
    flex-direction: row;
    padding: 2rem 0;

    .quantity{
        margin-left: 5rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        overflow: hidden;
        border-radius: 10px;
        border: 1px solid gray;
        text-align: left;
        margin: 1rem 0;
        box-shadow: 2px 3px 10px black;
        translate: all .3;
        cursor: pointer;
        height: 150px;
         
        .btns{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
        }
        .q-btn{
            border: 1px solid black;
            border-radius: 5px;
            padding: 10px;
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;

            button{
                background: transparent;
                border: none;
                font-size: 20px;
            }
        }
        .p{
            font-size: 2rem;
            color: #8a8a8a;
            margin-inline: 1rem;
        }
        .remove{
            width: 100%;
            border: 1px solid #8a8a8a;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px 10px;

            &:hover{
                background: rgb(137, 3, 3);
            }
        }
    }
}
</style>