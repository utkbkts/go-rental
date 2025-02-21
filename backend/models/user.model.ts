import mongoose from "mongoose";
import { UserRoles } from "shared";
import * as bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: [6, "Your password must be longer than 6 characters"],
      select: false,
    },
    phoneNo: {
      type: String,
      required: [true, "Please enter your phone number"],
    },
    avatar: {
      public_id: String,
      url: String,
    },
    role: {
      type: [String],
      default: ["user"],
      enum: {
        values: UserRoles,
        message: "Please select correct role for user",
      },
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

const User = mongoose.model("User", userSchema);
export default User;
