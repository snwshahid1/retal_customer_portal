import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { ErrorMsg } from "../FormField/style";
import { FileUpload } from "../UploadFile/style";
import { FileUploaderHolder } from "./style";

function FileUploaderDropzone({ maxNumberOfFiles = 5, children }: any) {
  const [uploadedFiles, setuploadedFiles] = useState<any>([]);
  const [errors, setErrors] = useState("");
  const MAX_FILE_SIZE = 19;

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
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }: any) => {
    console.log(errors);
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
      <button onClick={removefile(file)} className="remove-btn">
        <i className="close-btn"></i>
      </button>

      <span className="doc-icon-holder">
        <i className="doc-icon3"></i>
      </span>
      <div className="preview-detail">
        <span className="file-name">{file.path}</span>
        <span className="file-size">
          {file.size / 1000} kb{" "}
          <span className="file-progress">100%</span>
        </span>
        <span className="file-progress-bar">
          <span className="file-actual-progres" style={{width: '100%'}}></span>
        </span>
      </div>
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
        <div className="uploaded-files">
          <ul className="list-unstyled p-0 m-0">
            {files}
          </ul>
        </div>
      )}

      {/* {files.length > 0 && <button className="theme-btn" onClick={removeall}>Remove All</button>} */}
    </FileUploaderHolder>
  );
}

export default FileUploaderDropzone;
