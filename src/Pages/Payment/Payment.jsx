import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import '../../Components/Styles/paymentcard.css';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
import Transition from './../../Components/Transitions/Transition';

const Payment = () => {
  return (
    <>
      <div className="card-body text-black mx-auto justify-center w-96 bg-[#171717] rounded-lg z-50">
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
        <svg
          class="logo"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="36"
          height="36"
          viewBox="0 0 48 48"
        >
          <path
            fill="#ff9800"
            d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
          ></path>
          <path
            fill="#d50000"
            d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
          ></path>
          <path
            fill="#ff3d00"
            d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
          ></path>
        </svg>
      </div>

    </>
  );
};

export default Transition(Payment);
