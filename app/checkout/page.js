import '../globals.scss';
import PaymentCredentialsForm from './PaymentCredentialsForm';
import PersonalInformationForm from './PersonalInformationForm';

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
