const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validateUserData = require('./middleware/validateUserData.js')

function validateEmail(email) {
  // Use regular expression or a library like validator.js to validate email format
}

const UserSchema = new Schema({
  username: { type: String, maxLength: 25, minLength: 3, required: true, unique: true },
  firstName: { type: String, maxLength: 32, minLength: 1, required: true },
  lastName: { type: String, maxLength: 32, minLength: 1, required: true },
  dateOfBirth: { type: Date, required: true },
  countryFrom: { type: String, maxLength: 32, minLength: 3, required: true },
  following: [{
    user: { type: Schema.Types.ObjectId, ref: "User" },
    dateFollowed: { type: Date, default: Date.now }
  }],
  followed: [{
    user: { type: Schema.Types.ObjectId, ref: "User" },
    dateFollowed: { type: Date, default: Date.now }
  }],
  profileImage: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, 'Invalid email format'] // Using custom validator function
  },
  password: { type: String, required: true, minLength: 8, maxLength: 32 },
  googleId: { type: String },
  googleAccessToken: { type: String },
  googleRefreshToken: { type: String },
  googleMetadata: { type: Schema.Types.Mixed },
  isGoogleAuthenticated: { type: Boolean, default: false },
  interests: [{ type: Schema.Types.ObjectId, ref: "Interest" }],
  createdCourses: [{ type: Schema.Types.ObjectId, ref: "Note" }],
  subscribedCourses: [{ type: Schema.Types.ObjectId, ref: "Note" }],
  role: { type: String, required: true },
  notifications: [{
    user: { type: Schema.Types.ObjectId, ref: "User", required: true},
    action: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: "Note" },
    dateNotified: { type: Date, default: Date.now },
    seen: { type: Boolean , default: false },
  }]
});

UserSchema.pre('save', validateUserData);
// Export function to create "User" model class
module.exports = mongoose.model("User", UserSchema);