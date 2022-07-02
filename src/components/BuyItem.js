import React from 'react'
import styled from 'styled-components';
const BuyItem = ({item,name,price}) => {
  return (
    <div>
    <Item style={{textAlign:'end'}}>
        x
    </Item>
        <div style={{height: 100,width:'100%', display:'flex'}}>
            <div style={{marginTop:30, marginLeft:10,marginRight:10,}}>
                <img Width='20' Height='20' Top='3'src={"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGZo5q%2FbtqFJqxzuQY%2F8ZD1uIF1KXnODBKu0P7750%2Fimg.webp"} alt={'asd'} />
            </div>
            <img Width='150' Height='100' Top='3'src={item} alt={'asd'}/>
            <div style={{display:'flow'}}>
                <div>{name}</div>
                <div style={{textAlign:'right'}}>{price}</div>
            </div>
        
        </div>
    </div>
  )
}
const Item = styled.div`

  `; 
export default BuyItem;