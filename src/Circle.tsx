import { useState, useEffect } from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 10px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    setCount(2);
    setValue(3);
  }, []);

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
