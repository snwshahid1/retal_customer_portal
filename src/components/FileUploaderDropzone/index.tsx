import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { FileUpload } from '../UploadFile/style';

function FileUploaderDropzone() {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map( (file: any) => {
    console.log(file);
    return (
      <li key={file.path}>
        {file.path} - {file.size/1000} kb
      </li>
    )
  });

  return (
    <>
      <FileUpload {...getRootProps({className: 'dropzone'})}>
        <i className="add-file-icon mb-1"></i>
        <h4>Choose file to upload</h4>
        <span>19 kb max</span>
      </FileUpload>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </>
  );
}

export default FileUploaderDropzone;