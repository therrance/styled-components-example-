import styled from "styled-components";

const Thing = styled.div`
  color: blue;
  position: relative;
  width: 200px;
  left: 20px;
  cursor: pointer;

  span {
    color: yellow;

    b {
      color: red;

      i {
        color: blue;
      }
    }
  }
`;

function App() {
  return (
    <Thing>
      Hello World!
      <span>
        span{" "}
        <b>
          bold <i>cursive</i>
        </b>
      </span>
    </Thing>
  );
}

export default App;
