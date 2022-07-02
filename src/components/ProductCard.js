import styled from "styled-components";

const ProductCard = ({ name, description, thumbnail }) => {
    return (
      <div>

        <img Width='341' Height='204' Top='3'src={thumbnail} alt={name} />
        <ProductTitle>
        {name}
        </ProductTitle>
        <ProductBody>
        {description}
        </ProductBody>
      </div>
    );
  };
  const ProductTitle = styled.div`
height: 26px;
width: 336px;
left: 0px;
top: 219px;
font-family: Noto Sans CJK KR;
font-size: 20px;
font-weight: 700;
line-height: 26px;
letter-spacing: -0.01em;
text-align: left;
  `;  
  const ProductBody = styled.div`
height: 42px;
width: 305px;
left: 0px;
top: 257px;
font-family: Noto Sans CJK KR;
font-size: 16px;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.01em;
text-align: left;
  `;  
  export default ProductCard;