// PaymentComponent.js
import { useState } from 'react';
import axios from 'axios';

const PaiementComponent = () => {
  const [paymentUrl, setPaymentUrl] = useState('');

  const createSwiklyPayment = async () => {
    try {
      const formData = new FormData();
      formData.append('first_name', 'John');
      formData.append('last_name', 'Doe');
      formData.append('client_email', 'john.doe@swikly.com');
      formData.append('swik_description', 'Test Swikly API');
      formData.append('swik_amount', '100');
      formData.append('swik_type', 'deposit');
      //formData.append('id', 'MY_BUSINESS_ID');
      //'Missing parameters: client_email, swik_amount, swik_lang, swik_description, swik_type'
      formData.append('swik_end_day', '1');
      formData.append('swik_end_month', '3');
      formData.append('swik_end_year', '2024');
      formData.append('email', 'true');
      formData.append('sms', 'true');
      formData.append('swik_lang', 'FR');
      formData.append('phone_number', '+33601020304');
      formData.append('swik_start_day', '18');
      formData.append('swik_start_month', '2');
      formData.append('swik_start_year', '2024');

      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1_0/newSwik`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      response.data && setPaymentUrl(response.data.acceptUrl);
      console.log('Paiement Swikly créé :', response.data);

    } catch (error) {
      console.error('Erreur lors de la création du paiement Swikly :', error);
    }
  };

  return (
    <div>
      <h1>Paiement avec Swikly</h1>
      <button onClick={createSwiklyPayment}>Effectuer le paiement</button>
      {paymentUrl && (
        <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
          Paiement Swikly
        </a>
      )}
    </div>
  );
};

export default PaiementComponent;
