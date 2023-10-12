import { FC, memo } from "react";
import { DocPreviewHolder } from "./style";
import iFrameUrl from "src/assets/docs/sample.pdf";

const DocPreview: FC<any> = ({ iFrameURL = iFrameUrl, fileTitle }) => {

  return (
    <DocPreviewHolder>
      <iframe
        src={iFrameURL}
        title={fileTitle}
        height='100%'
        width='100%'
      />
    </DocPreviewHolder>
  );
};

export default memo(DocPreview);
