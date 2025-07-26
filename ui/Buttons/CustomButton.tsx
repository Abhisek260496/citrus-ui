// import styles from "@/styles/components/custombutton.module.scss";
import { styled } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import { memo } from "react";

const CustomBtn = styled(Button)`
  &.button {
    padding: 13px 22px;
    border-radius: 50px;
    background-color: var(--color747FF4);
    border: 1px solid var(--color747FF4);
    color: var(--white);
    min-width: 180px;
    .MuiTypography-caption {
      color: var(--white);
      font-weight: 700;
      font-size: 16px;
      line-height: 1.1;
    }
    &:hover {
      background-color: var(--black);
      border: 1px solid var(--black);
    }
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
`;
const CustomButtonMemo = ({
  loading = false,
  ...props
}: { loading?: boolean } & ButtonProps) => {
  return (
    <CustomBtn {...props}>
      {loading && <CircularProgress size={15} color="inherit" />}
      {props?.children}
    </CustomBtn>
  );
};

const CustomButton = memo(CustomButtonMemo);

export default CustomButton;
