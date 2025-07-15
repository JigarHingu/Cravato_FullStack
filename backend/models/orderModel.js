import moongoose from 'mongoose';

const orderSchema = new moongoose.Schema({
  userId: {type: String, required: true},
  items: {type: Array, required: true},
  amount: {type: Number, required: true},
  address: {type: Object, required: true},
  status: {type: String, default: "Food is being prepared"}, 
  date: {type: Date, default: Date.now()},
  payment:{type: Boolean, default: false}
});

const orderModel = moongoose.models.order || moongoose.model("Order", orderSchema);

export default orderModel;