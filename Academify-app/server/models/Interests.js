const InterestSchema = new Schema({
  name: { type: String, required: true, unique: true }
});

// Export the Interest model
module.exports = mongoose.model("Interest", InterestSchema);