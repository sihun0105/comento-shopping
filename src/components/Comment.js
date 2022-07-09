import React from 'react'
import styled from 'styled-components';
const Comment = ({name,detail,thumbnail,grade}) => {
  return (
    <CommentStyled>
        <div style={{width:341,height:84,left:24,top:659,display:'flex',}}>
            <img src={thumbnail} width={50} height={50} alt={name}></img>
            <div style={{display:'flow'}}>
            <div>{grade}</div>
            <div>{name}</div>
            </div>
        </div>
            <div>{detail}</div>
    </CommentStyled>
  )
}

const CommentStyled = styled.div`
background-color:rgb(250,250,250);
padding:10px;
`;
export default Comment;