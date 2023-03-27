<template>
  <div class="cart-container">
    <div class="inner">
      <h2>Your cart</h2>
      <p v-if="cart.length == 0">Your cart is empty</p>
    </div>
    <ul class="list inner">
      <li v-for="item in cart" :key="item.id">
        {{ item.name }}
        <span>{{ item.quantity }}</span>
      </li>
      <li>
        Price <b> ${{ totalPrice }}</b>
      </li>
    </ul>
    <div class="button inner">
      <RouterLink to="/shop">Checkout</RouterLink>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  name: "Cart",
  
  setup() {
    const store = useStore();

    let cart = computed(function () {
      return store.state.cart;
    });

    let totalPrice = computed(function () {
      return cart.value.reduce((total, next) => {
        return total + next.quantity * next.price;
      }, 0);
    });

    return {
      cart,
      totalPrice,
    };
  },
};
</script>

<style lang="scss">
.cart-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 300px;
  height: 300px;

  border: 1px solid green;
  border-radius: 10px;
  box-shadow: 2px 3px 15px green;

  cursor: pointer;

  .inner{
    padding: 5px 10px;
    border-bottom: 1px solid green;
    width: 100%;
  }

  h2{
    font-size: 20px;
    color: #6a6a6a;
    margin-bottom: 1rem;
  }
  
  p{
    color: rgb(120, 1, 1);
  }

  li{
    list-style-type: none;
    font-size: 17px;
    letter-spacing: 1px;
    color: #646464;
    margin: 10px 0;
  }

  .button{
    font-size: 17px;
    letter-spacing: 1px;
    background: green;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    &:hover {
        background: white;
        border: 1px solid green
    }
    &:hover a {
        color: green;
    }
     a{
        color: white;
        text-decoration: none;
     }
  }

}
</style>
