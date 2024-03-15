const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  role: { type: String },
  firstName: { type: String, maxLength: 32, required: true },
  lastName: { type: String, maxLength: 32, required: true },
  gender: { type: String, maxLength: 32, required: true},
  country: { type: String, maxLength: 32, required: true},
  dateOfBirth: { type: Date, required: true },
  username: { type: String, maxLength: 25, minLength: 3, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  courses: {
    created: [{ 
      type: Schema.Types.ObjectId, ref: "Course", required: true 
    }],
    subscribed: [{ 
      type: Schema.Types.ObjectId, ref: "Course", required: true }, 
      {dateSubscribed: { type: Date, required: true }
    }]
  }
});

// Export function to create "User" model class
module.exports = mongoose.model("User", UserSchema);