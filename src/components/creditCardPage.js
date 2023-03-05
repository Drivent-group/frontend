import styled from 'styled-components';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useState } from 'react';

export default  function CreditCardComponent(props) {
  const { modality, hotelChoice, finalValue, ticketId } = props;
  
  const [form, setForm] = useState({
    cvc: '', 
    expiry: '', 
    name: '',
    number: '' 
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    }); 
  }
  function submitPayment(data) {
    const issuer= 'visa';  
    const dataToInsert = {
      ticketId
    };
  }

  return (
    <>
		   <Paragraphs>Ingresso Escolhido</Paragraphs>

      <TicketCard>
        <p>{modality} + {hotelChoice}</p>
        <Paragraphs>{finalValue}</Paragraphs>
      </TicketCard>
      <Paragraphs>Pagamento</Paragraphs>
      <PaymentFormBox>
        <Cards
          cvc={form.cvc}
          expiry={form.expiry}
          focused={form.focus}
          name={form.name}
          number={form.number}
          issuer = "visa"
        />
        <form>
          <Topbox>
        	<input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={handleForm}
              value={form.description}
              maxLength = "16"
            />
            <h1>E.g.: 49...,51...,36...,37...</h1>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleForm}
              value={form.description}
              width  = "5px"
            />
          </Topbox>
          <InnerBox>
            <ExpiryInput
              type="text"
              name="expiry"
              maxLength= "4"
              mask = "00/00"
              placeholder="Valid Thru"
              onChange={handleForm}
              value={form.description}
            />
            <CvcInput
              type="cvc"
              name="cvc"
              placeholder="CVC"
              maxLength= "4"
              onChange={handleForm}
              value={form.description}
            />
          </InnerBox>   
        </form>
      </PaymentFormBox>
      
      <Button onClick={() => {submitPayment(form);}}> 
        <p> Finalizar Pagamento</p>
      </Button>

    </>
  );
}

const PaymentFormBox = styled.div`
display: flex;
padding-right: 50px;
width: 650px;
form {
  margin-left: 18px ;
  h1 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  text-align: start;
  color: gray;
  }
}
input {
  border: 1px solid #CECECE;;
  height: 40px;
  margin-top: 8px;
  border-radius: 8px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: start;
  color: #454545;
  padding-left: 10px;
  color: gray;
}
`;
const Paragraphs = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;

margin-bottom: 17px;
`;

const TicketCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 290px;
  height: 108px;
  border: 1px solid #CECECE;
  border-radius: 20px;
  background-color: #FFEED2;
  padding-top: 35px;
  margin-right: 24px;
  margin-bottom: 30px;
  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
    margin-bottom: 8px;
  }
  h1{
    font-size: 14px;
  }
`;

const Topbox = styled.div`
  width: 290px;
  input {
    width: 100%;
  }
`;

const InnerBox = styled.div`
width: 290px;
display: flex;
justify-content: space-between;
`;
const ExpiryInput = styled.input`
width: 60%;
`;
const CvcInput = styled.input`
width: 30%;
`;
const Button = styled.button`
  background-color: #E5E5E5;
  border-radius: 6px;
  margin-top: 35px;
  width: 182px;
  height: 37px;
   box-shadow: 1px 1px 8px 2px #888888;
  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000000;
  }
`;
