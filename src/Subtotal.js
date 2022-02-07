import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { SportsBasketball } from '@mui/icons-material';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const history =useHistory();
  const [{basket,user},dispatch] = useStateValue();

  const addaddress = () =>{

  }
  return <div className='subtotal'>
      <CurrencyFormat renderText={(value)=>(
          <>
          <p>
              Subtotal({basket.length} items):
              <strong>{value}</strong>
          </p>
          <small className='subtotal_gift'>
            <input type="checkbox"/>This Order contains a gift
          </small>
          </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"₹"}
      />
  <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
  
  </div>;
}

export default Subtotal;
