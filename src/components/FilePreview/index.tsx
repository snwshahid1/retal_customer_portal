import { FC, memo } from "react";
import { FilePreviewHolder } from "./style";
import iFrameUrl from "src/assets/docs/sample.pdf";

const FilePreview: FC<any> = ({ iFrameURL = iFrameUrl, fileTitle }) => {

  return (
    <FilePreviewHolder>
      <iframe
        src={iFrameURL}
        title={fileTitle}
        height='100%'
        width='100%'
      />
    </FilePreviewHolder>
  );
};

export default memo(FilePreview);
