// controllers/storeController.js
const Store = require("../models/Store");


exports.createStore = async (req, res) => {
  try {
    const stores = new Store(req.body);
    await stores.save()
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: "Error fetching stores" });
  }
};


exports.getStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: "Error fetching stores" });
  }
};

exports.suspendStore = async (req, res) => {
  try {
    const store = await Store.findByIdAndUpdate(req.params.storeId, { status: "suspended" });
    res.json(store);
  } catch (error) {
    res.status(500).json({ error: "Error suspending store" });
  }
};

exports.activateStore = async (req, res) => {
  try {
    const store = await Store.findByIdAndUpdate(req.params.storeId, { status: "active" });
    res.json(store);
  } catch (error) {
    res.status(500).json({ error: "Error activating store" });
  }
};
