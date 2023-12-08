import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request) {
  const body = await request.json();

  if (body.lineItems.length === 0) {
    return (
      new Response("error"),
      {
        status: 405,
      }
    );
  }
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
      apiVersion: "2023-10-16",
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.SERVER_URL}/success`,
      cancel_url: `${process.env.SERVER_URL}/cancel`,
      line_items: body.lineItems,
      mode: "payment",
    });
    return NextResponse.json({ session });
  } catch (err) {
    console.error(err);
    return (
      new Response("error"),
      {
        status: 405,
      }
    );
  }
}
