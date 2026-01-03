import palette from "@/themes/palette";
import { TextField, TextFieldProps, styled } from "@mui/material";
import { forwardRef } from "react";

const CustomTextField = styled(TextField)`
  .MuiInputBase-root {
    background: #333231;
    border-radius: 10px;
    padding: 18px 22px;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: ${palette.common.white};
    input {
      padding: 0;
      border: none;
      &::placeholder {
        color: ${palette.common.white};
        opacity: 1;
      }
    }
  }
  &.isTypeTwo {
    .MuiInputBase-root {
      background: #fff;
      border-radius: 7px;
      padding: 10px 15px;
      font-size: 12px;
      color: #0c0d0c;
      input {
        &::placeholder {
          color: #0c0d0c;
          opacity: 0.5;
        }
      }
    }
  }
`;

const CustomInputWith_forwardRef = ({
  isTypeTwo,
  ...props
}: TextFieldProps & { isTypeTwo?: boolean }) => {
  return (
    <CustomTextField {...props} className={`${isTypeTwo ? "isTypeTwo" : ""}`} />
  );
};

CustomInputWith_forwardRef.displayName = "CustomInput";

const CustomInput = forwardRef(CustomInputWith_forwardRef);

export default CustomInput;
