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
`;

const CustomInputWith_forwardRef = ({ ...props }: TextFieldProps) => {
  return <CustomTextField {...props} />;
};

CustomInputWith_forwardRef.displayName = "CustomInput";

const CustomInput = forwardRef(CustomInputWith_forwardRef);

export default CustomInput;
