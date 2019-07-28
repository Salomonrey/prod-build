var mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  subcategory: [
    {
      name: {
        type: String
      },
      description: {
        type: String
      }
    }
  ]
});

mongoose.model("Category", CategorySchema);
