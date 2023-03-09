import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import useToken from '../../../hooks/useToken';
import { createPayment } from '../../../services/paymentApi';

export default function CreditCardComponent({ ticketData }) {
  const token = useToken();
  const [form, setForm] = useState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
  });
  
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function submitPayment(data) {
    const cardNumberValidation = data.number < 16;
    const nameValidation = data.name.length < 3;
    const expiryValidation = data.expiry.length < 4 || data.expiry.length > 6;
    const cvcValidation = data.cvc.length < 3;

    let month = data.expiry.substr(0, 2);
    let year = data.expiry.length === 4? '20' + data.expiry.substr(2, 4): ( data.expiry.includes('/')? data.expiry.substr(3, 6) : data.expiry.substr(2, 6)); 
    data.expiry = `${month}/${year}`;

    if (cardNumberValidation) {
      toast('Digite o número correto do Cartão de Crédito');
      return;
    }
    if (nameValidation) {
      toast('Preencha corretamente o nome no Cartão');
      return;
    }
    if (expiryValidation) {
      toast('Preencha corretamente a data de validade');
      return;
    }
    if (cvcValidation) {
      toast('Preencha corretamente os dados de CVC');
      return;
    }

    const issuer = 'visa';
    
    const dataToInsert = {
      ticketId: ticketData.id,
      cardData: {
        issuer: issuer,
        number: data.number,
        name: data.name,
        expirationDate: data.expiry,
        cvv: data.cvc
      }
    };

    try {
      await createPayment(dataToInsert, token);
    } catch (error) {
      toast('Erro ao processar o pagamento');
    }
  }

  return (
    <>
      <PaymentFormBox>
        <Cards
          cvc={form.cvc}
          expiry={form.expiry}
          focused={form.focus}
          name={form.name}
          number={form.number}
          issuer="visa"
        />
        <form>
          <Topbox>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={handleForm}
              value={form.number}
              maxLength="16"
            />
            <StyledTypography variant="body2" color="textSecondary">
              {'E.g.: 49...,51...,36...,37...'}
            </StyledTypography>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleForm}
              value={form.name}
              width="5px"
            />
          </Topbox>
          <InnerBox>
            <ExpiryInput
              type="text"
              name="expiry"
              maxLength="6"
              placeholder="Valid Thru"
              onChange={handleForm}
              value={form.expiry}
            />
            <CvcInput
              type="cvc"
              name="cvc"
              placeholder="CVC"
              maxLength="3"
              onChange={handleForm}
              value={form.cvc}
            />
          </InnerBox>
        </form>
      </PaymentFormBox>
      <Button onClick={() => {
        submitPayment(form);
      }}>
        <StyledTypography>
          {'Finalizar Pagamento'}
        </StyledTypography>
      </Button>
    </>
  );
}

const StyledTypography = styled(Typography)`
`;

const PaymentFormBox = styled.div`
  display: flex;
  padding-right: 50px;
  width: 650px;
  form {
    margin-left: 18px;
  }
  input {
    border: 1px solid #cecece;
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
  background-color: #e5e5e5;
  border-radius: 6px;
  margin-top: 35px;
  width: 182px;
  height: 37px;
  box-shadow: 1px 1px 8px 2px #888888;

`;
