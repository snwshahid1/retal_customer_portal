import { FC, memo } from "react";
import { Link } from "react-router-dom";

const LatestProject: FC<any> = () => {
  const Documents = [
    {
      title: "Retal Contract 2023",
      iconClass: "doc-icon1",
      link: "#",
      isNew: true,
    },
    {
      title: "Overview 2023 V2",
      iconClass: "doc-icon2",
      link: "#",
      isNew: false,
    },
    {
      title: "Retal Contract 2022",
      iconClass: "doc-icon1",
      link: "#",
      isNew: false,
    },
    {
      title: "Partnerships Retal",
      iconClass: "doc-icon2",
      link: "#",
      isNew: false,
    },
  ];
  return (
    <>
      <div className="sec-title">
        <h4>Documents</h4>
        <Link to="/documents" className="view-link">
          View all
        </Link>
      </div>
      <ul className="list-unstyled p-0 m-0">
        {Documents.map(({ title, link, iconClass, isNew }: any, i: number) => (
          <li key={i}>
            <Link to={link}>
              <span className="doc-icon-holder">
                <i className={iconClass}></i>
              </span>
              <span>
                {isNew && <span className="new-tag">new</span>}
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(LatestProject);
