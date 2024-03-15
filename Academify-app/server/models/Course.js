const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true, maxLenght: 20, minLenght: 3 },
  body: { type: String, required: true, maxLenght: 300, minLenght: 3 },
  datePosted: { type: Date, default: Date.now,  required: true },
  public: { type: Boolean, required: true },
  comments: [
    {
      author: { type: Schema.Types.ObjectId, ref: "User", required: true },
      body: { type: String, required: true },
      datePosted: { type: Date, default: Date.now }
    }
  ],
  subscribers: [{ type: Schema.Types.ObjectId, ref: 'User' , dateFavorited: Date}],
});

// Export function to create "User" model class
module.exports = mongoose.model("Course", CourseSchema);