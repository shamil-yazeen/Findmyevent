import Stripe from "stripe";
import config from "./env.js";

const stripe = new Stripe(config.stripeSecretKey, {
  apiVersion: "2024-06-20"
});

export default stripe;