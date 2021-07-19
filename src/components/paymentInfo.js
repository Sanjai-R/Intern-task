import React from 'react'
import style from '../Styles/paymentinfo.module.css';
function PaymentInfo() {
  const PaymentButton = ({icon,text})=>{
     return(<button className={style.btn}>
       <div>
           {text}
           {icon}
       </div>
     </button>);
  }
  const Dates =({txt})=>{
    return (
      <select className={style.select} >
        <option value="1">{txt}</option>
        <option value="2">{txt}</option>
        <option value="3">{txt}</option>
      </select>
    );
  }
  return (
    <div className={style.root}>
      <h1 className={style.title}>PaymentInfo</h1>

      <div className={style.paymentbtn}>
        <PaymentButton text="Paypal" />
        <PaymentButton text="Credit Card" />
      </div>
      <div className={style.input}>
        <h4>Name on the card</h4>
        <input type="text" />
        <h4>Card Number</h4>
        <input type="text" />
      </div>
      <div style={{ 
        display: "flex",
      }}>
        <div className={style.date}>
          <h4 style={{ textAlign: "start", marginLeft: "15px" }}>
            Expiration Date
          </h4>
          <div style={{ display: "flex", marginLeft: "5%" }}>
            <Dates txt="MM" />
            <Dates txt="yyyy" />
          </div>
        </div>
        <div style={{ display: "flex",marginTop: "10px" ,marginLeft: "2%",flexDirection: "column",alignItems: "center"}}>
          <h4 style={{ textAlign: "start"}}>CVV</h4>
          <input type="number" />
        </div>
      </div>

      <button className={style.btn_btm}>
        <h1 style={{ margin: 0 }}>Check Out</h1>
      </button>
    </div>
  );
}

export default PaymentInfo
