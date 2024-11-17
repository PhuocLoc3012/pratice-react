import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//import InputField from '../../../../components/form-controls/InputField';
import InputField from "components/form-controls/InputField";
import { Avatar, Button, Typography } from "@mui/material";
//import using jsconfig
import { makeStyles } from '@mui/styles';
import PasswordField from "components/form-controls/PasswordField";
import { Email } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    root: {
        
    }, 
    avatar: { 
        margin: '0 auto',
        
    },
    title: {
        textAlign: 'center',
        margin: '2 0 3 0'
    },
    submit: {
        margin: '4 0 2 0'
    },
}))




// rfsp
RegisterForm.propTypes = {
  onSubmit: PropTypes.func, //viết tắt: ptf
};

function RegisterForm(props) {

    const classes = useStyles()


  //valiation
  const schema = z.object({
    fullName: z
      .string()
      .min(1, "Title is required"),
      //.startsWith("a", { message: "Must be start with a" }),
    email: z.string(),
    password: z.string(),
    retypePassword: z.string(),
  });

  //tạo ra form object sử dụng hook useForm
  const form = useForm({
    defaultValues: {
        fullName: '',
        email: '',
        password: '',
        retypePassword: '',
    },
    resolver: zodResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props; // để kiểm tra thử thằng cha có truyền xuống
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset({
        fullName: "",
        email: "",
        password: "",
        retypePassword: "",
      });
  };
  return (
    <div className={classes.root}>
      {/* //form có sẵn hàm form.handleSubmit //mình cần truyền hàm mình vào */}
      <Avatar className={classes.avatar}>
        
      </Avatar>
      <Typography className={classes.title}>
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="fullName" label="Full Name" />
        <InputField form={form} name="email" label="Email" />
        <PasswordField form={form} name="password" label="Password"  />
        <PasswordField form={form} name="retypePassword" label="Retype Password" />
        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>Create an account</Button>
      </form>
    </div>
  );
}

export default RegisterForm;
