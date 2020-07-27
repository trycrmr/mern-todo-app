import { useState } from "react";

const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (updatedValues) => {
      setValues({
        ...values,
        ...updatedValues,
      });
    },
  ];
};

export default useForm;
