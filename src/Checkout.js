import React from 'react';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";


function Checkout() {
  const[{basket,user},dispatch] = useStateValue();

  return <div className="checkout">
      <div className="checkout_left">
        <img className='checkout_ad' src="https://images-eu.ssl-images-amazon.com/images/G/31//AmazonPayTravel/PC_TravelSafe-banner_1500x125.jpg" alt=""/>
        <div>
            <h4 className='checkout_title'>Hello {!user ?'Guest':user.email}</h4>
            <h2 className='checkout_title'>Your shopping Basket</h2>
        
        {basket.map(item =>(
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
        {/*CheckoutProduct*/}
        </div>
      </div>
      <div className='checkout_right'>
          <Subtotal />
          
          
      </div>

  </div>;
}

export default Checkout;
