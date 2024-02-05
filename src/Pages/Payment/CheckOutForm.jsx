import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../Components/Hooks/useAxiosSecure';
import useCarts from './../../Components/Hooks/useCarts';
import useAuth from './../../Components/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckOutForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [cart] = useCarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure
      .post('/create-payment-intent', { price: totalPrice })
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('payment error', error);
      setError(error.message);
    } else {
      console.log('payment method', paymentMethod);
      setError('');
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      });

    if (confirmError) {
      console.log('confirm error');
    } else {
      console.log('Payment intent', paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction Id', paymentIntent.id);
        setTransactionId(paymentIntent.id);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Payment Successful',
          showConfirmButton: false,
          timer: 1500,
        });
        //         const payment = {
        //           email: user?.email,
        //           price: totalPrice,
        //           date: new Date(),
        //           myProductsId: MyProducts?.map(item => item?._id),
        // productItemId:
        //         }
      }
    }
    navigate('/myProfile');
  };

  return (
    <div className="z-50">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          disabled={!stripe || !clientSecret}
          className="btn btn-primary my-4"
        >
          Pay
        </button>
        <p className="text-red-700">{error}</p>
        {transactionId && (
          <p className="text-green-700">
            Your transaction Id : {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
