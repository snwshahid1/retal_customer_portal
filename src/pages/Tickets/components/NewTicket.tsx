import FormField from "src/components/FormField";
import { FC, memo, useState } from "react";
import { NewTicketWrapper } from "../style";
import SelectField from "src/elements/Form/SelectField";
import TextField from "src/elements/Form/TextField";
import TextAreaField from "src/elements/Form/TextAreaField";
import { FileUpload } from "src/components/UploadFile/style";
import ToggleDropdown from "src/components/ToggleDropdown";
import CheckboxList from "src/elements/CheckboxList";
import { useClickAway } from "@uidotdev/usehooks";
import UploadImage1 from "src/assets/images/upload-img1.png";
import UploadImage2 from "src/assets/images/upload-img2.png";
import UploadImage3 from "src/assets/images/upload-img3.png";
import UploadImage4 from "src/assets/images/upload-img4.png";
import SlickSlider from "src/components/SlickSlider";

const NewTicket: FC<any> = ({}) => {
  const ref = useClickAway(() => {
    setToggleCategories(false);
  });

  const [inputs, setInputs] = useState({
    property: "",
    message: "",
  });

  const [toggleCategories, setToggleCategories] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);

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

  const sliderSettings = {
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const UploadeImages = [
    UploadImage1,
    UploadImage2,
    UploadImage3,
    UploadImage4,
    UploadImage1,
  ];

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

  const handleChange = (event: any) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

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
              options={[
                { label: "Select property", value: "" },
                { label: "Ewan Sedra", value: "Ewan Sedra" },
                { label: "Retal Rise", value: "retal rise" },
                {
                  label: "Alaya Al Nakeel",
                  value: "Alaya Al Nakeel",
                  selected: true,
                },
              ]}
            />
          }
        />

        <FormField
          className="bg-grey-field"
          label="Category"
          control={
            <ToggleDropdown
              ref={ref}
              toggleCTA={
                <TextField
                  type="text"
                  name="categories"
                  className="textbox h-50 icon-end"
                  value={categories}
                  onClick={() => setToggleCategories(true)}
                  icon={<i className="sm-icon down-black-icon"></i>}
                  readOnly
                />
              }
              visible={toggleCategories}
            >
              <CheckboxList options={options} />
            </ToggleDropdown>
          }
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
              value={inputs.message}
              onChange={handleChange}
            />
          }
        />

        <FormField
          className="bg-grey-field mb-0"
          label="Import photos"
          labelDescription="10 photos max"
          control={
            <FileUpload>
              <i className="add-file-icon mb-1"></i>
              <h4>Choose file to upload</h4>
              <span>19 kb max</span>
            </FileUpload>
          }
        />

        <div className="uploaded-images mb-2">
          <h4>Added photos</h4>
          <ul className="list-unstyled p-0 m-0">
            <SlickSlider sliderSettings={sliderSettings}>
              {UploadeImages.map((image: any, i: number) => (
                <li key={i}>
                  <div className="slider-item">
                    <div className="slider-img">
                      <button>
                        <i className="close-btn"></i>
                      </button>
                      <img src={image} alt="" />
                    </div>
                  </div>
                </li>
              ))}
            </SlickSlider>
          </ul>
        </div>
      </div>

      <div className="new-ticket-bottom sticky-bottom">
        <button className="theme-btn w-100 disabled-btn" disabled>
          Send ticket
        </button>
      </div>
    </NewTicketWrapper>
  );
};

export default memo(NewTicket);
