const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  //passport-local-mongoose will automatically create the password and username field and for us,even though we have not created them in our schema,they are already there.
});

userSchema.plugin(passportLocalMongoose); //this is a function that comes with passport-local-mongoose which allows you to use the built-in methods for authentication and authorization like login,signup etc..

module.exports = mongoose.model("User", userSchema);
