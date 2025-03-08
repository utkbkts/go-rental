import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const stripeCheckoutSession = catchAsyncErrors(async () => {});
