import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import BasketItem from "../components/BasketItem";
import SubmitButton from "../components/SubmitButton";
import * as webStorage from "../utils/webStorage";

const Basket = () => {
  const [basketItems, setBasketItems] = useState();
  const [basketItemCount, setBasketItemCount] = useState(0);
  const [basketItemprice, setBasketItemprice] = useState(0);

  const totalprice = (item) => {
    const currentProduct = JSON.parse(JSON.stringify(item));
    let price = 0;
    for (var i = 0; i < item.length; i++) {
      if (currentProduct[i] == null) {
        console.log("null값 존재");
        continue;
      }
      price = price + currentProduct[i].price;
    }
    return setBasketItemprice(price);
  };
  // Basket이 렌더링 될때, 한번만 실행되는 로직
  useEffect(() => {
    const items = webStorage.getBasketItems();
    setBasketItems(items);
    setBasketItemCount(items.length);
    totalprice(items);
    console.log(items);
  }, []);

  // [장바구니 상품 갯수]가 바뀌면, 실행되는 로직
  useEffect(() => {
    const items = webStorage.getBasketItems();
    setBasketItems(items);
    totalprice(items);
  }, [basketItemCount]);

  const onClickRemoveButton = (productId) => {
    console.log("삭제");
    webStorage.removeBasketItem(productId);
    setBasketItemCount(basketItems.length - 1);
  };

  return (
    <BasketStyled>
      <Navigation name="장바구니" hasBack={true} />

      {basketItems &&
        basketItems.map((product) => (
          <BasketItem
            key={product?.id}
            id={product?.id}
            thumbnail={product?.thumbnail}
            name={product?.name}
            price={product?.price}
            onClickRemoveButton={() => onClickRemoveButton(product.id)}
          />
        ))}
      <BasketSummary>
        <Basketdetail>
          <div>상품 금액({basketItemCount}개)</div>
          <div>배송비</div>
          <div>총 주문금액</div>
        </Basketdetail>
        <Basketdetail style={{ textAlign: "right" }}>
          <div>{basketItemprice}원</div>
          <div>0원</div>
          <div>{basketItemprice}원</div>
        </Basketdetail>
      </BasketSummary>
      <SubmitButton
        name={"주문하기"}
        onClick={() => {
          alert("주문완료");
        }}
      />
    </BasketStyled>
  );
};

const BasketStyled = styled.div``;
const BasketSummary = styled.div`
  display: flex;
`;
const Basketdetail = styled.div`
  padding: 16px;
  margin: 10px 0px;
  flex: 1;
`;

export default Basket;
