import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/Navigation";
import { getProductDetail } from "../data/mockData";
import SubmitButton from "../components/SubmitButton";
import { commentdata } from "../data/comment";
import Comment from "../components/Comment";

const ProductDetail = () => {
  // URL에서 paramter 변수(productId) 받아오는 로직
  let { productId } = useParams();
  const [product, setProduct] = useState();
  const [catergoryIndex, setCategoryIndex] = useState(0);
  const categories = ["상품설명", "상품후기"];

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, [productId]);
  const buttonstyled = { display: "grid", alignItems: "center", flex: 0.5 };
  const selectbutton = { backgroundColor: "#EEEEEE" };
  return (
    <ProductDetailStyled>
      <Navigation />
      {product && (
        <>
          <img
            src={product.thumbnail}
            width="390"
            height={420}
            alt={"asd"}
          ></img>
          <div>{product.name}</div>
          <div>{product.description}</div>
        </>
      )}
      <GrayLine />
      <div style={{ width: "100%", height: 50, padding: 10, marginBottom: 10 }}>
        <div
          style={{
            fontFamily: "Noto Sans CJK KR",
            fontSize: 16,
            fontWeight: 700,
            lineHeight: 3,
            textAlign: "left",
          }}
        >
          {product && product.name}
        </div>
        <div
          style={{
            fontFamily: "Noto Sans CJK KR",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1,
            textAlign: "left",
          }}
        >
          {product && product.price}
        </div>
      </div>
      <div
        style={{
          width: 390,
          height: 48,
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        {categories ? (
          categories.map((item, idx) => (
            <div
              style={Object.assign(
                {},
                buttonstyled,
                catergoryIndex === idx && selectbutton
              )}
              key={idx}
              onClick={() => {
                setCategoryIndex(idx);
              }}
            >
              {item}
            </div>
          ))
        ) : (
          <div>없어용</div>
        )}
      </div>
      {catergoryIndex === 0 ? (
        <>
          <ProductDetailSection>
            <img
              Width="390"
              Height="100%"
              Top="3"
              src={
                "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg"
              }
              alt={"asd"}
            />
          </ProductDetailSection>
          <SubmitButton name={"장바구니추가"}></SubmitButton>
        </>
      ) : (
        <>
          {commentdata.map((item, idx) => (
            <>
              <Comment
                name={item.name}
                detail={item.detail}
                thumbnail={item.thumbnail}
                grade={item.grade}
              />
              <div style={{ height: 20 }}></div>
            </>
          ))}
          <SubmitButton name={"장바구니추가"}></SubmitButton>
        </>
      )}
    </ProductDetailStyled>
  );
};

const ProductDetailStyled = styled.div``;
const GrayLine = styled.div`
  height: 1px;
  width: 390;
  background: #eeeeee;
`;
const ProductDetailSection = styled.div`
  height: 1188.2060546875px;
  width: 342px;
  left: 24px;
  top: 659px;
  border-radius: 0px;
`;

export default ProductDetail;
