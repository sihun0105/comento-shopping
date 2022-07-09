import styled from "styled-components";

const ProductCard = ({ name, description, thumbnail, onClick }) => {
  return (
    <ProductCardStyled onClick={onClick}>
      {/* 이미지를 <img> 대신 <div>를 쓰는 방법: 이미지 사이즈가 외부의 요인에 의해 바뀌어야 할 때 */}
      {/* 배경은 사이즈가 없기 때문에, 이미지 사이즈를 고정값으로 줘야합니다
         - width또는 height 하나를 고정px로 주고, 다른 속성을 %로 줘도 됩니다. */}
      <ProductThumbnail style={{ backgroundImage: `url(${thumbnail})` }} />
      <ProductName>{name}</ProductName>
      <ProductDesc>{description}</ProductDesc>
    </ProductCardStyled>
  );
};

const ProductCardStyled = styled.div`
  padding-bottom: 40px;
`;

const ProductThumbnail = styled.div`
  width: 100%;
  height: 204px;
  background-size: cover;
  background-position: center;
  margin-bottom: 12px;
`;
const ProductName = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.01em;
  padding-bottom: 12px;
`;
const ProductDesc = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #000000;
`;

export default ProductCard;
