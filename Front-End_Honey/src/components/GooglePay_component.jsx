import React, { useEffect } from 'react';

function GooglePayButton() {
  useEffect(() => {
    const loadGooglePayScript = () => {
      return new Promise((resolve, reject) => {
        // Si ya existe, resolver de inmediato
        if (window.google && window.google.payments) {
          resolve();
        } else {
          const script = document.createElement('script');
          script.src = 'https://pay.google.com/gp/p/js/pay.js';
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Google Pay script failed to load.'));
          document.body.appendChild(script);
        }
      });
    };

    loadGooglePayScript()
      .then(() => {
        const paymentsClient = new window.google.payments.api.PaymentsClient({
          environment: 'TEST',
        });

        const paymentDataRequest = {
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [{
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['MASTERCARD', 'VISA'],
            },
            tokenizationSpecification: {
              type: 'PAYMENT_GATEWAY',
              parameters: {
                gateway: 'stripe',
                'stripe:version': '2020-08-27',
                'stripe:publishableKey': 'pk_test_TU_CLAVE_PUBLICA_AQUI',
              },
            },
          }],
          merchantInfo: {
            merchantName: 'Mi Proyecto Honey',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPrice: '10.00',
            currencyCode: 'USD',
            countryCode: 'US',
          },
        };

        const button = paymentsClient.createButton({
          onClick: () => {
            paymentsClient.loadPaymentData(paymentDataRequest)
              .then(paymentData => {
                console.log('Google Pay PaymentData:', paymentData);

                fetch('http://127.0.0.1:8000/api/googlepay/', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(paymentData),
                })
                  .then(res => res.json())
                  .then(res => console.log('Backend response:', res))
                  .catch(err => console.error('Backend error:', err));
              })
              .catch(err => console.error('Google Pay error:', err));
          },
        });

        const buttonContainer = document.getElementById('google-pay-button');
        if (buttonContainer) {
          buttonContainer.innerHTML = ''; // Evita duplicar botón
          buttonContainer.appendChild(button);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return <div id="google-pay-button"></div>;
}

export default GooglePayButton;
