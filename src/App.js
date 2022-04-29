import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.customBg};
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Text = styled.span`
  color: white;
`;

const Btn = styled.button`
  background-color: cyan;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input`
  background-color: magenta;
`;

const InputAttr = styled(Input).attrs({ required: true })`
  background-color: yellow;
`;

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: 100, height: 100, backgroundColor: "teal" }}>
          <span style={{ color: "white" }}>Hi</span>
        </div>
        <div style={{ width: 100, height: 100, backgroundColor: "tomato", borderRadius: "50%" }}>
          <span style={{ color: "white" }}>Hi</span>
        </div>
      </div>
      <Father>
        <Box customBg="teal">
          <Text>Hi</Text>
        </Box>
        <Circle customBg="tomato">
          <Text>Hi</Text>
        </Circle>
      </Father>
      <Father>
        <Btn>button</Btn>
        <Btn as="a" href="/link">
          button as a
        </Btn>
        <Input required />
        <InputAttr />
      </Father>
    </div>
  );
}

export default App;
