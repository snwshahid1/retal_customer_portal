import PageTitle from "src/components/PageTitle"
import AccordionComp from "src/components/Accordion";
import Searchbar from "src/components/Searchbar";

const FAQs = () => {
  const FAQs = [
    {
        header: "Suspendisse a ultricies neque",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id risus sit amet dui susci cursus. Cras vitae ipsum leo. Suspendisse venenatis dapibus pellentesque."
    },
    {
        header: "Turpis non bibendum vehicula velit",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id risus sit amet dui susci cursus. Cras vitae ipsum leo. Suspendisse venenatis dapibus pellentesque. Suspendisse a ultricies. Suspendisse potenti. In pretium et turpis non bibendum."
    },
    {
        header: "Change my password",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id risus sit amet dui susci cursus. Cras vitae ipsum leo. Suspendisse venenatis dapibus pellentesque. Suspendisse a ultricies. Suspendisse potenti. In pretium et turpis non bibendum."
    },
    {
        header: "Turpis non bibendum vehicula velit",
        content: "Suspendisse a ultricies. Suspendisse potenti. In pretium et turpis non bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id risus sit amet dui susci cursus. Cras vitae ipsum leo. Suspendisse venenatis dapibus pellentesque."
    },
    {
        header: "My personal information",
        content: "Consectetur adipiscing elit. Donec id risus sit amet dui susci cursus. Cras vitae ipsum leo. Suspendisse venenatis dapibus pellentesque. Suspendisse a ultricies. Suspendisse potenti. In pretium et turpis non bibendum. consectetur adipiscing elit. Donec id risus sit amet dui susci cursus. Cras vitae ipsum leo. Suspendisse venenatis dapibus pellentesque. Suspendisse a ultricies. Suspendisse potenti. In pretium et turpis non bibendum"
    },
    {
        header: "Suspendisse a ultricies neque",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id risus sit amet dui susci cursus. Cras vitae ipsum leo. Suspendisse venenatis dapibus pellentesque. Suspendisse a ultricies. Suspendisse potenti. In pretium et turpis non bibendum."
    },
    {
        header: "Bibendum vehicula",
        content: "Suspendisse a ultricies. Suspendisse potenti. In pretium et turpis non bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id risus sit amet dui susci cursus. Cras vitae ipsum leo. Suspendisse venenatis dapibus pellentesque."
    },
  ]

  return(
    <>
      <div className="page-title-holder flex-base-wrapper">
        <PageTitle title="FAQ" subtitle="Find here all the FAQ." />
        <Searchbar placeholder="Search a faq"  />
      </div>
      <div className="white-box-border">
        <AccordionComp items={FAQs} openMultiple={true} />
      </div>
    </>
  )
}

export default FAQs