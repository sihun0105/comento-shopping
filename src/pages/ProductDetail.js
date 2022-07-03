import Navigation from "../components/Navigation";
import styled from "styled-components";
import SubmitButton from "../components/SubmitButton";
const ProductDetail = () => {
  return (
    <div >
        <TitleSection>
        <Navigation name={"코멘토 쇼핑"}/>
        </TitleSection>
        <TitleLine />


      <ProductSection>
        <div>
        <img Width='390' Height='420'src={'https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg'} alt={'hi'} />
        </div>
        <div style={{width:'100%',height:50,padding:10}}>
          <div style={{fontFamily: 'Noto Sans CJK KR',fontSize: 16,fontWeight: 700,lineHeight: 3,textAlign: 'left'}}>비숑 블랙 머그잔</div>
          <div style={{fontFamily: 'Noto Sans CJK KR',fontSize: 16,fontWeight: 400,lineHeight: 1,textAlign: 'left'}}>21,800</div>
        </div>
      </ProductSection>
      <GrayLine/>
      <div style={{width:390,height:48,display:'flex',textAlign:'center',lineHeight:3}}>
          <div style={{flex:0.5,backgroundColor:'#EEEEEE'}}>asd</div>
          <div style={{flex:0.5,backgroundColor:'#FFFFFF'}}>asd</div>
      </div>
      <GrayLine/>
      
      <ProductDetailSection>
      <img Width='390' Height='100%' Top='3'src={'https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg'} alt={'asd'} />
      </ProductDetailSection>
      <SubmitButton name={'장바구니 담기'}></SubmitButton>
    </div>
  );
};


const TitleLine = styled.div`
  height: 2px;
  width: 100%;
  background: #eeeeee;
`;
const GrayLine = styled.div`
  height: 1px;
  width: 390;
  background: #eeeeee;
`;
const ProductSection = styled.div`
Width:390px;
Height:520px;
Top:63px;
`;
const ProductDetailSection = styled.div`
height: 1188.2060546875px;
width: 342px;
left: 24px;
top: 659px;
border-radius: 0px;

`;
const TitleSection = styled.div`
width: 390px;
height: 66px;
`;

export default ProductDetail;