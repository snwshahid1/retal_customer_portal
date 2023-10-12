import DocumentItem from "src/components/DocumentItem";
import PageTitle from "src/components/PageTitle";
import { useState } from "react";
import DocPreview from "src/components/DocPreview";
import Modal from "src/components/Modal";
import { useClickAway } from "@uidotdev/usehooks";
import { useLocation } from "react-router-dom";

const Documents = () => {
  const location = useLocation();
  const docHash = location.hash === "#docID" ? true : false;
  const [isDocView, setIsDocView] = useState(docHash);
  const handleDocument = () => {
    setIsDocView(true);
  };

  const ref = useClickAway(() => {
    setIsDocView(false);
  });

  const DocumentsData = [
    {
      docID: "#8726914B",
      title: "Retal Contract 2023",
      docLink: "#",
    },
    {
      docID: "#8726914B",
      title: "Overview 2023 V2",
      docLink: "#",
    },
    {
      docID: "#8726914B",
      title: "Retal Contract 2022",
      docLink: "#",
    },
    {
      docID: "#8726914B",
      title: "Partnerships Retal",
      docLink: "#",
    },
    {
      docID: "#8726914B",
      title: "Retal Contract 2022",
      docLink: "#",
    },
    {
      docID: "#8726914B",
      title: "Partnerships Retal",
      docLink: "#",
    },
  ];

  return (
    <>
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle
          title="Documents"
          subtitle="Find here all the your Documents"
        />
      </div>
      <div className="d-grid documents-cards-wrapper gap-12">
        {DocumentsData.map((document, i: number) => (
          <DocumentItem {...document} viewDocument={handleDocument} key={i} />
        ))}
      </div>
      {isDocView && (
        <Modal ref={ref} open={isDocView} className="modal-xl border-radius-10">
          <DocPreview />
        </Modal>
      )}
    </>
  );
};

export default Documents;
