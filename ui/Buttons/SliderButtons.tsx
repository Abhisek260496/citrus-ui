import palette from "@/themes/palette";
import { Button, Stack, StackProps, styled } from "@mui/material";
import NextArrowIcon from "../Icons/NextArrow";
import PreviousArrow from "../Icons/PreviousArrow";

const SliderButtonsStack = styled(Stack)`
  position: absolute;
  right: 30px;
  top: -100px;

  button {
    transition: all 0.3s ease-in-out;
    background: ${palette.background.default};
    border-radius: 100%;
    width: 45px;
    height: 45px;
    padding: 5px;
    min-width: auto;

    @media (max-width: 899px) {
      width: 35px;
      height: 35px;
    }

    svg {
      @media (max-width: 899px) {
        width: 12px;
      }
    }
    &:not(:last-of-type) {
      margin-right: 10px;
    }
    &:hover {
      background: ${palette.text.primary};
    }
  }
`;
interface ICustomSliderButtons extends StackProps {
  onClickNext?: () => void;
  onClickPrev?: () => void;
  className?: string;
}

// Custom Prev Arrow
const SliderButtons = ({ className, ...props }: ICustomSliderButtons) => {
  const { onClickNext, onClickPrev } = props;
  return (
    <SliderButtonsStack
      direction="row"
      alignItems="center"
      justifyContent="end"
      className={className}
      {...props}
    >
      <Button disableRipple className="custom-prev-arrow" onClick={onClickPrev}>
        <PreviousArrow />
      </Button>
      <Button disableRipple className="custom-next-arrow" onClick={onClickNext}>
        <NextArrowIcon />
      </Button>
    </SliderButtonsStack>
  );
};

export default SliderButtons;
