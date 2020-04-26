import firebase from "firebase";

export const state = () => ({
  products: [],
  cart: [],
  currentUser: {}
});

export const getters = {
  GET_MEN_CAT(state) {
    return state.products.filter(prod => prod.category === "men");
  },
  GET_WOMEN_CAT(state) {
    return state.products.filter(prod => prod.category === "women");
  },
  GET_ACCESSORIES_CAT(state) {
    return state.products.filter(prod => prod.category === "accessories");
  },
  GET_PRODUCTS(state) {
    return state.products;
  },
  GET_CART(state) {
    return state.cart;
  },
  GET_CART_TOTAL_PRICE(state) {
    let price = 0;
    state.cart.forEach(product => {
      price += parseInt(product.price);
    });
    return price;
  },
  GET_USER(state) {
    return state.currentUser;
  }
};

export const mutations = {
  LOAD_PRODUCTS(state, payload) {
    return state.products.push(payload);
  },
  ADD_TO_CART: (state, payload) => {
    return state.cart.push(payload);
  },
  REMOVE_ITEM_CART(state, payload) {
    return state.cart.splice(payload, 1);
  },
  CLEAR_CART(state) {
    return (state.cart = []);
  },
  ADD_USER(state, payload) {
    return (state.currentUser = payload);
  },
  CLEAR_USER(state) {
    return (state.currentUser = null);
  }
};

export const actions = {
  LOAD_PRODUCTS(context) {
    const db = firebase.firestore().collection("products");

    // real time adding the products...
    db.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          let product = doc.data();
          product.id = doc.id;
          // getting image
          context.commit("LOAD_PRODUCTS", product);
        }
      });
    });
    // return state.products.push(payload);
  },
  ADD_TO_CART: (context, payload) => {
    context.commit("ADD_TO_CART", payload);
  },
  REMOVE_ITEM_CART(context, payload) {
    context.commit("REMOVE_ITEM_CART", payload);
  },
  CLEAR_CART(context) {
    context.commit("CLEAR_CART");
  },
  ADD_USER(context, payload) {
    const db = firebase.firestore().collection("users");
    db.doc(payload)
      .get()
      .then(res => {
        const user = res.data();
        user.id = res.id;
        context.commit("ADD_USER", user);
      });
  },
  CLEAR_USER(context) {
    context.commit("CLEAR_USER");
  }
};
