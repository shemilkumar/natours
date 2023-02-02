import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51MWuwBSGpYK5WTMoLmSWouGpjoyCSTx54BXnyNKs0GAf5Zgn4hnbzBEDuA51qHktgB1kV04IgLHuOAfdZ1SWNYc400WkAa2Wdr'
);

export const bookTour = async (tourId) => {
  try {
    // Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/booking/checkout-session/${tourId}`
    );

    // create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }
};
