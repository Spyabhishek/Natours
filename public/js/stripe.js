/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';


export const bookTour = async tourId => {
    const stripe = Stripe('pk_test_51KQm0iSHWbMsrzJU4mHnKzMP8FnL00uIQGOGcgnJutG6pyfqwLZlZAAO5lnfE5SN0w1JyVm0FTHvt2d67sppwIE300TxUrXEvF');
     
    try{
    // 1) Get Checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // 2) Create checkout from + chanre credit card
    await stripe.redirectToCheckout({
        sessionId: session.data.session.id
    });


    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }
};