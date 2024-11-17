import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//import InputField from '../../../../components/form-controls/InputField';
import InputField from "components/form-controls/InputField";
import { Avatar, Typography } from "@mui/material";
//import using jsconfig

// rfsp
RegisterForm.propTypes = {
  onSubmit: PropTypes.func, //viết tắt: ptf
};

function RegisterForm(props) {
  //valiation
  const schema = z.object({
    fullName: z
      .string()
      .min(1, "Title is required")
      .startsWith("a", { message: "Must be start with a" }),
  });

  //tạo ra form object sử dụng hook useForm
  const form = useForm({
    resolver: zodResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props; // để kiểm tra thử thằng cha có truyền xuống
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset(); //review due to not working
  };
  return (
    <div>
      {/* //form có sẵn hàm form.handleSubmit //mình cần truyền hàm mình vào */}
      <Avatar>
        
      </Avatar>
      <Typography>
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="fullName" label="Full Name" />
        <InputField form={form} name="email" label="Email" />
        <InputField form={form} name="password" label="Password" />
        <InputField form={form} name="retypePassword" label="Retype Password" />
        
      </form>
    </div>
  );
}

export default RegisterForm;
