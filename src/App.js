import styled from "styled-components";

const Parent = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
`;

const Child = styled.div`
  width: 20px;
  height: 20px;
  background: #0e85ff;
  border-radius: 50%;

  ${Parent}:hover & {
    background: yellow;
  }
`;

function App() {
  return (
    <Parent>
      Наведите сюда
      <Child />
    </Parent>
  );
}

export default App;
