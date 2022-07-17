import styled from "styled-components";
import React from "react";
import SubmitButton from "../components/SubmitButton";
import BuyItem from "../components/BuyItem";
const Basket = () => {
  return (
    <div>
      <ProductTitle>장바구니</ProductTitle>
      <GrayLine />
      <ProductBody>
        <BuyItem
          item={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNpEl93qfPAUwPhp36z1p3UCWEZboN8M7EvnbrAgR&s"
          }
          name={"지오지아 폴스퍼 스넉 다운3color"}
          price={"149,000원"}
        />
        <BuyItem
          item={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNpEl93qfPAUwPhp36z1p3UCWEZboN8M7EvnbrAgR&s"
          }
          name={"지오지아 폴스퍼 스넉 다운3color"}
          price={"149,000원"}
        />
      </ProductBody>
      <div style={{ Width: "404", Height: "159", Top: "565", left: "-7" }}>
        <div style={{ display: "flex" }}>
          상품금액(1개){" "}
          <div style={{ textAlign: "right", width: 300 }}>599,000원</div>
        </div>
        <div style={{ display: "flex" }}>
          상품할인금액{" "}
          <div style={{ textAlign: "right", width: 305 }}>-450,000원</div>
        </div>
        <div style={{ display: "flex" }}>
          배송비 <div style={{ textAlign: "right", width: 347 }}>0원</div>
        </div>
        <div style={{ display: "flex" }}>
          총 주문금액{" "}
          <div style={{ color: "red", textAlign: "right", width: 315 }}>
            149,000원
          </div>
        </div>
      </div>
      <SubmitButton name={"주문하기"}></SubmitButton>
    </div>
  );
};
const ProductTitle = styled.div`
  height: 50px;
  width: 390px;

  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: center;
`;
const ProductBody = styled.div`
  height: 226px;
  width: 390px;
  margin-bottom: 100px;
`;
const GrayLine = styled.div`
  height: 1px;
  width: 100%;
  background: #eeeeee;
`;

export default Basket;
