import { FC, memo } from "react"
import { CardItem } from "./style"

const DocumentItem: FC<any> = ({ docID, title, viewDocument }) => {
  
  return (
    <CardItem>
      <div className="card-item-title">
        <i className="doc-icon icon-black"></i>
        <div>
          <h4>{title}</h4>
          <span>Document Id {docID}</span>
        </div>
      </div>
      <div className="card-item-bottom">
        <button className="btn-inline color-primary" onClick={() => viewDocument()}>View document</button>
      </div>
    </CardItem>
  );
};

export default memo(DocumentItem);
