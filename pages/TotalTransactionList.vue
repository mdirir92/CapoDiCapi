<template>
  <div class="container py-5">
    <h1 class="display-4">Orders Detail</h1>
    <div class="table-responsive">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Country</th>
            <th scope="col">City</th>
            <th scope="col">Address</th>
            <th scope="col">Amount</th>
            <th scope="col" width="100">Date</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ order.customer_name }}</td>
            <td>{{ order.customer_phone }}</td>
            <td>{{ order.customer_email }}</td>
            <td>{{ order.status }}</td>
            <td>{{ order.customer_country }}</td>
            <td>{{ order.customer_city }}</td>
            <td>{{ order.customer_address }}</td>
            <td>${{ order.totalPrice }}</td>
            <td>{{ order.date }}</td>
            <td class="text-danger text-center delete" @click="deleteTrans(order.id, index)">X</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "TotalTransactionList",
  data() {
    return {
      orders: []
    };
  },
  created() {
    const db = firebase.firestore().collection("transaction");

    // load all the transactions from the firebase
    db.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          let id = doc.id;
          let order = doc.data();
          order.id = doc.id;
          this.orders.push(order);
        }
      });
    });
  },
  methods: {
    deleteTrans(id, index) {
      const db = firebase.firestore().collection("transaction");

      // deleting the transaction from firebase
      db.doc(id)
        .delete()
        .then(() => {
          this.deleteByIndex(index);
        });
    },
    deleteByIndex(index) {
      // removing from the dom
      this.orders.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.delete {
  cursor: pointer;
}
</style>
