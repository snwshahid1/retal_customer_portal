import FormField from "src/components/FormField";
import { FC, memo, useEffect, useState } from "react";
import { NewTicketWrapper } from "../style";
import SelectField from "src/elements/Form/SelectField";
import TextField from "src/elements/Form/TextField";
import TextAreaField from "src/elements/Form/TextAreaField";
import ToggleDropdown from "src/components/ToggleDropdown";
import CheckboxList from "src/elements/CheckboxList";
import { useClickAway } from "@uidotdev/usehooks";
import { useFormik } from "formik";
import { validateTicket } from "../Validation";
import ImagesUploaderDropzone from "src/components/FileUploaderDropzone/ImagesUploaderDropzone";

const NewTicket: FC<any> = ({}) => {
  const [toggleCategories, setToggleCategories] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

  const ref = useClickAway(() => {
    setToggleCategories(false);
  });

  const formik = useFormik({
    initialValues: {
      property: "Alaya Al Nakeel",
      categories: [],
      message: "",
    },
    validationSchema: validateTicket,
    enableReinitialize: true,
    onSubmit: (values: any) => {
      // api call
      //console.log(values);
    },
  });

  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    handleChange,
    handleBlur,
    isSubmitting,
    isValid,
    dirty,
    touched,
    handleSubmit,
  }: any = formik;

  const handleCategoriesChange = (event: any) => {
    const isChecked = event.target.checked;
    let value = event.target.value;
    if (isChecked) {
      setCategories([...categories, value]);
    } else {
      setCategories(() =>
        categories.filter((category: any) => category !== value)
      );
    }
  };

  useEffect( () => {
    setFieldValue('categories', categories);
  }, [categories]);

  const options = [
    {
      label: "Engineering",
      name: "categories",
      id: "Engineering",
      value: "Engineering",
      onChange: handleCategoriesChange,
      //selected: checked,
    },
    {
      label: "Electricity",
      name: "categories",
      id: "Electricity",
      value: "Electricity",
      onChange: handleCategoriesChange,
    },
    {
      label: "Carpentry",
      name: "categories",
      id: "Carpentry",
      value: "Carpentry",
      onChange: handleCategoriesChange,
    },
    {
      label: "Paint",
      name: "categories",
      id: "Paint",
      value: "Paint",
      onChange: handleCategoriesChange,
    },
    {
      label: "Plumbling",
      name: "categories",
      id: "Plumbling",
      value: "Plumbling",
      onChange: handleCategoriesChange,
    },
    {
      label: "Landscape",
      name: "categories",
      id: "Landscape",
      value: "Landscape",
      onChange: handleCategoriesChange,
    },
  ];

  return (
    <NewTicketWrapper>
      <h2>Raise new ticket</h2>
      <div className="new-ticket-top">
        <FormField
          className="bg-grey-field"
          label="Property"
          control={
            <SelectField
              name="property"
              id="property"
              className="textbox selectbox h-50"
              value={values.property}
              onChange={handleChange}
              options={[
                { label: "Select property", value: "" },
                { label: "Ewan Sedra", value: "Ewan Sedra" },
                { label: "Retal Rise", value: "retal rise" },
                { label: "Alaya Al Nakeel", value: "Alaya Al Nakeel" },
              ]}
            />
          }
          errorText={touched["property"] && errors["property"]}
        />

        <FormField
          className="bg-grey-field"
          label="Category"
          labelTag="span"
          control={
            <ToggleDropdown
              ref={ref}
              toggleCTA={
                <TextField
                  type="text"
                  name="categories"
                  className="textbox h-50 icon-end"
                  value={values.categories}
                  onClick={() => setToggleCategories(!toggleCategories)}
                  icon={<i className="sm-icon down-black-icon"></i>}
                  readOnly={true}
                />
              }
              visible={toggleCategories}
            >
              <CheckboxList options={options} />
            </ToggleDropdown>
          }
          errorText={touched["categories"] && errors["categories"]}
        />

        <FormField
          className="bg-grey-field"
          label="Message"
          control={
            <TextAreaField
              name="message"
              id="message"
              className="textbox textarea"
              placeholder="Enter message"
              value={values.message}
              onChange={handleChange}
            />
          }
          errorText={touched["message"] && errors["message"]}
        />

        <FormField
          className="bg-grey-field"
          label="Import photos"
          labelDescription="10 photos max"
          control={
            <ImagesUploaderDropzone
              maxNumberOfFiles={10}
            >
              <i className="add-file-icon mb-1"></i>
              <h4>Choose file to upload</h4>
              <span>19 kb max</span>
            </ImagesUploaderDropzone>
          }
        />
      </div>

      <div className="new-ticket-bottom sticky-bottom">
        <button
          className={`theme-btn w-100 ${
            Boolean(!(isValid && dirty)) ? "disabled-btn" : ""
          }`}
          type="submit"
          onClick={handleSubmit}
          disabled={Boolean(!(isValid && dirty))}
        >
          Send ticket
        </button>
      </div>
    </NewTicketWrapper>
  );
};

export default memo(NewTicket);
