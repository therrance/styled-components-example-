import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(Wrapper)`
  color: #8857d8;
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
      {/* <Content color="red" hide>
        Simple example
      </Content> */}
    </Wrapper>
  );
}

export default App;
