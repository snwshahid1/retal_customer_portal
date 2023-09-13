import DocumentItem from "src/components/DocumentItem";
import PageTitle from "src/components/PageTitle"


const Documents = () => {
  const DocumentsData = [
    {
        docID: "#8726914B",
        title: "Retal",
        docLink: "#"
    },
    {
      docID: "#8726914B",
      title: "Retal",
      docLink: "#"
    },
  ]

  return(
    <>
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle title="Documents" subtitle="Find here all the your Documents" />
      </div>
      <div className="d-grid documents-cards-wrapper gap-10">
        {DocumentsData.map(( document, i: number) => (
          <DocumentItem {...document} key={i} />
        ))}
      </div>
    </>
  )
}

export default Documents