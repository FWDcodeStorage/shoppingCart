<template>
    <div class="product-wrapper">
       <img :src="product.url" />
       <h3>{{ product.name }}</h3>
       <h4>${{ product.price }}</h4>
       <p>{{ product.shortdesc }}</p>
       <button @click="addToCart" :disabled="itemAlreadyInCart">
        {{ itemAlreadyInCart? "Added" : "Add to Cart" }}
        </button>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

export default {
    name: 'Product',
    props: ['product'],

    setup(props){
        const store = useStore();

        let cart = computed(function(){
            return store.state.cart
        })

        let itemAlreadyInCart = computed(function(){
            let inCart = false;

            cart.value.forEach(item => {
                if(item.id === props.product.id){
                    inCart = true;
                }
            })
            return inCart;
        })

        function addToCart(){
            if(!itemAlreadyInCart.value){
                store.commit("addCartItem", props.product)
            }
            else{
                alert("Item already added to cart")
            }
        }

        return {
            cart,
            itemAlreadyInCart,
            addToCart
        }
    }
}
</script>

<style lang="scss">
    .product-wrapper{
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        width: 250px;
        overflow: hidden;
        border-radius: 10px;
        border: 1px solid gray;
        text-align: left;
        margin: 1rem 0;
        box-shadow: 2px 3px 10px black;
        translate: all .3;
        cursor: pointer;

        &:hover{
            transform: scale(1.1);
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
        h3{
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 1px;
            margin-top: 15px;
            color: #6a6a6a;
        }
        h4{
            font-size: 20px;
            color: #6a6a6a;
            letter-spacing: 1.5px;
        }
        p{
            font-size: 16px;
            color: #8a8a8a;

            &:hover{
                color: #6a6a6a;
            }
        }
        button{
            border-radius: 5px;
            font-size: 18px;
            padding: 5px 10px;
        }
    }
</style>