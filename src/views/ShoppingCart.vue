<template>
  <div class="shopping-container">
    <div class="cart-item">
      <CartItem v-for="product in cart" 
      :product="product" 
      :key="product.id" />
    </div>
    <div class="cart">
        <Cart />
    </div>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import Cart from "../components/Cart.vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
    name: "ShoppingCart",
    components: {
        CartItem,
        Cart
    },

    setup(){
        const store = useStore();

        let cart = computed(function(){
          return  store.state.cart
        })

        return{
            cart
        }
    }
}
</script>

<style lang="scss">
.shopping-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 2rem 5rem;

  .cart-item{
    flex: 2;

  }
  .cart{
    flex: 1;
    position: fixed;
    top: 9rem;
    right: 5rem;
  }
}
</style>