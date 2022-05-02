import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

const Container = styled.button<{ isDark: boolean }>`
  position: relative;
  width: 50px;
  height: 30px;
  background: ${(props) => (props.isDark ? props.theme.cardBgColor : props.theme.cardBgColor)};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.isDark ? props.theme.textColor : props.theme.accentColor)};
  border-radius: 15px;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: ${(props) => (props.isDark ? "0%" : "100%")};
    width: 25px;
    height: 25px;
    background: ${(props) => (props.isDark ? props.theme.textColor : props.theme.accentColor)};
    border-radius: 50%;
    transform: ${(props) => (props.isDark ? "translate(0%, -50%) scale(0.8)" : "translate(-100%, -50%) scale(0.8)")};
    transition: left 0.2s, transform 0.2s;
  }
`;

function ToggleTheme() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <Container type="button" isDark={isDark} onClick={toggleDarkAtom}>
      <span className="hidden">{isDark ? "change light mode" : "change dark mode"}</span>
    </Container>
  );
}

export default ToggleTheme;
