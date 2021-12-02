import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 70px auto 0;
`;

const Input = styled.input`
  padding: ${(props) => (props["data-id"] === "name" ? "10px" : "14px")};
  border-radius: 4px;
  border: 1px solid ${(props) => props.borderColor};
  otline: none;
  background: #1b1c23;
`;

function App() {
  return (
    <Wrapper>
      <Input
        readOnly
        placeholder="Your name"
        borderColor="white"
        data-id="name"
        onClick={(event) => alert(event.target.dataset.id)}
      />
    </Wrapper>
  );
}

export default App;
