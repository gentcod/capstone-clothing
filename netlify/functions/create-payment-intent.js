const dotenv = require("dotenv");
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const express = require("express");

// const app = express();

exports.handler = async (event) => {
  try {
      const { amount } = JSON.parse(event.body);

      const paymentIntent = await stripe.paymentIntents.create({
         amount,
         currency: "usd",
         payment_method_types: ["card"],
      });

      return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
      };
      // app.post((req, res) => {
      //    res.status(200).JSON({
      //       body: paymentIntent
      //    })
      // })
   } catch (error) {
      console.error(error);

      return {
         statusCode: 400,
         body: JSON.stringify({error})
      }
   }
};
