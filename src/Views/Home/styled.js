import styled from "styled-components";

const WrapperContainerHome = styled.div`
  background-image: url(${(props) => props.backurl});
  height: 600px;
  background-color:black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export { WrapperContainerHome };
