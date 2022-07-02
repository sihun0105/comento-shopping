import styled from "styled-components";

const Navigation = ({name}) => {
    return <NaviText>{name}</NaviText>;
  };
  const NaviText = styled.div`
font-family: Noto Sans KR;
font-size: 18px;
font-weight: 700;
line-height: 26.06px;
letter-spacing: 0em;
text-align: center;
vertical-align: middle;
  `;    
  export default Navigation;