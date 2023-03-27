<template>
  <div class="home">
    <div class="products">
      <Product
        v-for="product in products"
        :product="product"
        :key="product.id"
      />
    </div>
    <div class="cart">
     <Cart />
    </div>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
import Cart from "@/components/Cart.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  name: "Home",
  components: {
    Product,
    Cart
  },
  setup() {
    const store = useStore();

    let products = computed(() => {
      return store.state.products;
    });

    return {
      products,
    };
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5rem 1rem;
  .cart {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: flex-start;
  }
  .products {
    display: flex;
    flex: 2;
    justify-content: space-between;
    align-items: left;
    flex-wrap: wrap;
  }
}
</style>
