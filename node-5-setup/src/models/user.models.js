import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import brcypt from "brcypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    avatar: {
      type: String, // cloudinary url
      required: true,
    },
    coverImage: {
      type: String, // cloudinary url
      required: true,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

//1. do something before saving data
//2. enctyption takes some time to do thinsg , so make it async
//3. after all operation middleware pass to next operation: next()
//4. function should only run only for initiali or password change only: if..
userSchema.pre("save", async function (next) {
  // (string,salt)
  if (this.isModified("password")) {
    this.password = await brcypt.hash(this.password, 10);
  }
  next();
});

//1. mongoose custom methods: chk password
userSchema.methods.isPasswordCorrect = async function (pswd) {
  return await bcrypt.compare(pswd, this.password);
};

export const User = mongoose.model("User", userSchema);
