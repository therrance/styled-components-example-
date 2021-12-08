import styled from "styled-components";
import "./App.css";

const Thing = styled.div`
  position: relative;
  width: 200px;
  left: 80px;
  cursor: pointer;
  padding: 20px 30px;
  border-radius: 5px;
  margin-top: 5px;
  transition: all 300ms;
  
  // Псевдоселектор
  &:hover {
    text-indent: 5px; // <Thing> при наведении
  }
  
  // <Thing> + <Thing>, Второй по счету Thing
  & + & {
    background: #0e85ff;
  }
  
  // <Thing> вместе с классом ".something"
  &.something {
    background: orange;
  }
  
  // Псевдоэлементы
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 5px;
    left: -60px;
    width: 50px;
    height: 50px;
    background: #0e85ff;
    border-radius: 50%;
  }

  &::after {
    left: unset;
    right: -60px;
  }
`;

function App() {
  return (
    <>
      <Thing className="thing[[
        \
        ">Hello World!</Thing>
    </>
  );
}

export default App;
