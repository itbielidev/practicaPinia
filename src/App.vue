<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
// import products from "@/data/products.json";
import { useProductStore } from "./stores/ProductStore";
import { useCartStore } from "./stores/CartStore";
import { storeToRefs } from "pinia";
const productStore = useProductStore();
const cartStore = useCartStore();
productStore.fill();
const { products } = storeToRefs(useProductStore());
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="addToCart($event, product)"
      />
    </ul>
  </div>
  <AppButton class="primary" @click="$emit('addToCart', count), (count = 0)"
    >Add to Cart</AppButton
  >
</template>
