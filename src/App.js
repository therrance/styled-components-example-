import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 70px auto 0;
`;

const Title = styled.h1`
  color: #8857d8;
`;

const Content = styled.div`
  font-size: 24px;
  color: ${(props) => props.color};
  ${(props) => (props.hide ? "opacity: 0" : "opacity: 1")};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
      <Content color="red" hide>
        Simple example
      </Content>
    </Wrapper>
  );
}

export default App;
