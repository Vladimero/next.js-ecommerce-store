import '../globals.scss';
import Image from 'next/image';
import PaymentCredentialsForm from './PaymentCredentialsForm';
import PersonalInformationForm from './PersonalInformationForm';

export default function CheckoutPage() {
  return (
    <>
      <h1>Checkout</h1>
      <p>Please fill the fields!</p>
      <PersonalInformationForm />
      <PaymentCredentialsForm />
    </>
  );
}
