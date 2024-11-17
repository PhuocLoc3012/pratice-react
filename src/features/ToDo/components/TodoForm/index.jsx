import React from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//import InputField from '../../../../components/form-controls/InputField';
import InputField from "components/form-controls/InputField";
//import using jsconfig

// rfsp
TodoForm.propTypes = {
  onSubmit: PropTypes.func, //viết tắt: ptf
};

function TodoForm(props) {
  //valiation
  const schema = z.object({
    title: z
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
    form.reset({
        title: ''
    }); //review due to not working
  };
  return (
    <p>
      {/* form có sẵn hàm form.handleSubmit, mình cần truyền hàm mình vào */}
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField form={form} name="title" label="Todo" />
      </form>
    </p>
  );
}

export default TodoForm;
