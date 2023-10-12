import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { ErrorMsg } from "../FormField/style";
import SlickSlider from "../SlickSlider";
import { FileUpload } from "../UploadFile/style";
import { FileUploaderHolder } from "./style";

function ImagesUploaderDropzone({ maxNumberOfFiles = 5, children }: any) {
  const [uploadedFiles, setuploadedFiles] = useState<any>([]);
  const [errors, setErrors] = useState("");
  const MAX_FILE_SIZE = 19;

  const sliderSettings = {
    draggable: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, []);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      if (uploadedFiles.length < maxNumberOfFiles) {
        setuploadedFiles([...uploadedFiles, ...acceptedFiles]);
      } else {
        setErrors(
          `Error: You're allowed to upload maximum ${maxNumberOfFiles} files.`
        );
      }
    },
    [uploadedFiles]
  );

  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    onDrop,
    maxFiles: maxNumberOfFiles,
    maxSize: MAX_FILE_SIZE * 1000,
    accept: {
      "image/*": [],
    },
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }: any) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size / 1000} kb
        <p>
          {errors.map((e: any) => (
            <span key={e.code}>
              {e.code === "file-too-large" ? (
                <ErrorMsg>File is larger than {MAX_FILE_SIZE} kb</ErrorMsg>
              ) : (
                <ErrorMsg>{e.message}</ErrorMsg>
              )}
            </span>
          ))}
        </p>
      </li>
    );
  });

  const removeall = () => {
    setuploadedFiles([]);
  };

  const removefile = (file: any) => () => {
    const newfiles = [...uploadedFiles];
    newfiles.splice(newfiles.indexOf(file), 1);
    setuploadedFiles(newfiles);
  };

  const files = uploadedFiles.map((file: any) => (
    <li key={file.path}>
      <div className="slider-item">
        <div className="slider-img">
          <button onClick={removefile(file)}>
            <i className="close-btn"></i>
          </button>
          <img
            src={file.preview}
            // Revoke data uri after image is loaded
            //onLoad={() => { URL.revokeObjectURL(file.preview) }}
          />
        </div>
      </div>
      {/* {file.path} - {file.size / 1000} kb{" "} */}
    </li>
  ));

  return (
    <FileUploaderHolder className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <FileUpload>
          <input {...getInputProps()} />
          {children}
        </FileUpload>
      </div>
      {files.length >= maxNumberOfFiles && (
        <ErrorMsg className="error-message">{errors}</ErrorMsg>
      )}
      {fileRejectionItems}

      {files.length > 0 && (
        <div className="uploaded-images">
          <h4>Added photos</h4>
          <ul className="list-unstyled p-0 m-0">
            <SlickSlider sliderSettings={sliderSettings}>{files}</SlickSlider>
          </ul>
        </div>
      )}

      {/* {files.length > 0 && <button className="theme-btn" onClick={removeall}>Remove All</button>} */}
    </FileUploaderHolder>
  );
}

export default ImagesUploaderDropzone;
