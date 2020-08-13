import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (event) => {
      const isCheckbox = event.target.type === "checkbox";

      setValues({
        ...values,
        [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value,
      });
    },
  ];
};
