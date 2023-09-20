import { FC, memo } from "react"
import { FileUpload } from "./style"

const UploadFile: FC<any> = ({ children, className }) => {
  
  return (
    <FileUpload className={`file-upload ${className}`}>
      {children}
    </FileUpload>
  );
};

export default memo(UploadFile);
