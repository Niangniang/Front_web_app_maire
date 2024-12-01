import { ErrorMessage, Field, FieldProps } from "formik";
import TextError from "@/components/textError/textError";
import { ComboBox } from "@/components/ui/comboBox";

type OptionsType = {
  [key: string]: any;
};
type FormikSelectProps<T extends OptionsType> = {
  name: string;
  label: string;
  options: T[];
};

const FormikComboBox = <T extends OptionsType>({
  label,
  name,
  options,
}: FormikSelectProps<T>) => {
  return (
    <>
      <Field id={name} name={name}>
        {({ field, form }: FieldProps) => {
          <label htmlFor={name} className="">
            {label}
          </label>;
          return <ComboBox options={options} {...field} />;
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default FormikComboBox;
