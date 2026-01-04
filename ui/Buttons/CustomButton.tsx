// import styles from "@/styles/components/custombutton.module.scss";
import palette from "@/themes/palette";
import { styled } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { memo } from "react";

const CustomBtn = styled(Button)`
  padding: 7px 28px;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid ${palette.text.primary};
  color: ${palette.common.white};
  min-width: 180px;
  box-shadow: none;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: transparent;
    border: 1px solid ${palette.text.primary};
    color: ${palette.common.white};
    box-shadow: none;
  }
  &.buttonOutlined {
    padding: 10px 20px;
    border-radius: 50px;
    border: 1px solid var(--primaryBlue);
    color: var(--primaryBlue);
  }
  &.buttonText {
    padding: 10px 20px;
    border-radius: 50px;
    color: var(--primaryBlue);
  }
  &.isTypeTwo {
    background-color: ${palette.text.primary};
  }
`;
const CustomButtonMemo = ({
  loading = false,
  isTypeTwo,
  ...props
}: { loading?: boolean; isTypeTwo?: boolean } & ButtonProps) => {
  return (
    <CustomBtn className={`${isTypeTwo ? "isTypeTwo" : ""}`} {...props}>
      {loading && <CircularProgress size={15} color="inherit" />}
      {props?.children}
    </CustomBtn>
  );
};

const CustomButton = memo(CustomButtonMemo);

export default CustomButton;
