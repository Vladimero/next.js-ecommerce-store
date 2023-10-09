import '../globals.scss';
import PaymentCredentialsForm from './PaymentCredentialsForm';
import PersonalInformationForm from './PersonalInformationForm';

export const metadata = {
  title: 'Checkout',
  description: 'Please fill the fields',
};

export default function CheckoutPage() {
  return (
    <>
      <h1>Checkout</h1>
      <p>Please fill the fields!</p>
      <PersonalInformationForm />
      <br />
      <div>
        <button>
          <PaymentCredentialsForm />
        </button>
      </div>
    </>
  );
}
