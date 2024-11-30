const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  items: [
    {
      productId: {
        type: String,
      },
      name: {
        type: String,
      },
      quantity: {
        type: Number,
        required: true,
        min: [true, "Quantity can not be less than 1"],
        default: 1,
      },
      price: Number,
    },
  ],
  bill: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
