import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  h1 {
    color: ${(props) => props.theme.textColor};
  }
`;

function App() {
  const [username, setUsername] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", username);
  };

  return (
    <div className="App">
      <Container>
        <h1>Hello</h1>
      </Container>
      <form onSubmit={onSubmit}>
        <input type="text" value={username} onChange={onChange} placeholder="username" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default App;
