import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [],
    };
  },
});

const addToCart = (count, product) => {
  count = parseInt(count);
  CartStore.$patch((state) => {
    for (let index = 0; index < count; index++) {
      useCartStore.items.push(product);
    }
  });
};
