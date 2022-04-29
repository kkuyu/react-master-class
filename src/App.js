import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h2`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Wrapper>
        <Title>Theme</Title>
      </Wrapper>
    </div>
  );
}

export default App;
