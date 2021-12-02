import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  font-size: 24px;
`;

const StyledTitle = styled(Title)`
  color: #8857d8;
`;

function Title(props) {
  return <div className={props.className}>{props.children}</div>;
}

function App() {
  return (
    <Wrapper>
      <StyledTitle as="h1">Hello</StyledTitle>
      <Content color="red" hide>
        Simple example
      </Content>
    </Wrapper>
  );
}

export default App;
