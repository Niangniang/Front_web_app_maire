import { ErrorMessage, Field, FieldProps } from "formik";

import TextError from "../textError/textError";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
type FormikDatePickerProps = {
  name: string;
  label: string;
  width?: string;
  height?: string;
};
const FormikDatePicker = ({
  name,
  label,
  width,
  height,
}: FormikDatePickerProps) => {
  return (
    <div className="flex flex-col mt-[20px]">
      <label htmlFor={label}>{label}</label>
      <Field name={name}>
        {({ field, form, meta }: FieldProps) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <TimePicker
              value={value}
              className={`w-[${width}] h-${height} bg-[#ffffff] rounded-[8px] `}
              onChange={(val) => setFieldValue(name, val)}
              format={"HH:mm"}
              locale={"fr-FR"}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default FormikDatePicker;
