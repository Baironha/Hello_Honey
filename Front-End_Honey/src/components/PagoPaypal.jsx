import React from 'react'
import {PayPalScriptProvider,PayPalButtons} from "@paypal/react-paypal-js"
const PagoPaypal=()=> {
    const initianlOptions ={
        "clientId":"ATFtlxjo17FAmO8Cdo8pQZt3EBVv6suxpL98_nxGABfhTTa1lTmLjC-gGXAR65w3GipXlbTQYbeZmZY5",
         currency:"USD",
         intent:"capture"
    }
    const createOrder = (data,actions)=> {
          return actions.order.create({
            purchase_units:[
                {
                    amount:{
                        currency:"USD",
                        value:"700" /* Aca va el valor del producto!!! */
                    }
                }
            ]
        })
    }
    const onApprove = (data,actions)=> {
      return actions.order.capture().then(function(details){
        alert("Pago Completado" + details.payer.name.given_name)
      })
    }
    const onCancel = () => {
        alert("Pago Cancelado");
    };
  return (
    <div>
        <PayPalScriptProvider options={initianlOptions} >
            <PayPalButtons
            style={{
                layout: "horizontal",
                color: "blue",
                shape:"rect",
                label: "paypal"
            }}
            createOrder={(data,actions)=>createOrder(data,actions)}
            onApprove={(data,actions)=> onApprove(data,actions)}
            onCancel={onCancel}
            />
        </PayPalScriptProvider>
       
    </div>
  )
}
export default PagoPaypal

/* Reaccionar

Responder */










