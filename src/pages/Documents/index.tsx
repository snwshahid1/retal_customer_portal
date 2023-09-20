import DocumentItem from "src/components/DocumentItem";
import PageTitle from "src/components/PageTitle"


const Documents = () => {
  const DocumentsData = [
    {
        docID: "#8726914B",
        title: "Retal Contract 2023",
        docLink: "#"
    },
    {
      docID: "#8726914B",
      title: "Overview 2023 V2",
      docLink: "#"
    },
    {
      docID: "#8726914B",
      title: "Retal Contract 2022",
      docLink: "#"
    },
    {
      docID: "#8726914B",
      title: "Partnerships Retal",
      docLink: "#"
    },
    {
      docID: "#8726914B",
      title: "Retal Contract 2022",
      docLink: "#"
    },
    {
      docID: "#8726914B",
      title: "Partnerships Retal",
      docLink: "#"
    }
  ]

  return(
    <>
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle title="Documents" subtitle="Find here all the your Documents" />
      </div>
      <div className="d-grid documents-cards-wrapper gap-12">
        {DocumentsData.map(( document, i: number) => (
          <DocumentItem {...document} key={i} />
        ))}
      </div>
    </>
  )
}

export default Documents