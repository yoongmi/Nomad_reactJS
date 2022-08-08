import styled, { keyframes } from "styled-components";

const Styled = () => {
  return (
    <Father as="header">
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Circle bgColor="tomato"></Circle>
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
      <br />
      <Input />
      <Input />
      <BoxTwo>
        <Emoji>😝</Emoji>
      </BoxTwo>
    </Father>
  );
};

const Father = styled.div`
  //   display: flex;
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
`;
const Text = styled.h1`
  color: white;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;
const rotateAnimation = keyframes`
    0%{
        transform:rotate(0deg);
        border-radius:0px;
    }
    50%{
        transform:rotate(360deg);
        border-radius:100px;
    }
    100%{
        border-radius:0px;
    }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const BoxTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: red;
  animation: ${rotateAnimation} 2s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

export default Styled;
