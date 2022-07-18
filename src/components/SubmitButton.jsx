import React from "react";
import styled from "styled-components";
const SubmitButton = ({ name, onClick }) => {
  return (
    <Button onClick={onClick}>
      <ButtonText>{name}</ButtonText>
    </Button>
  );
};
const Button = styled.div`
  height: 70px;
  width: 390px;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  background-color: #24dbaf;
`;
const ButtonText = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: center;
  line-height: 70.06px;
`;
export default SubmitButton;
