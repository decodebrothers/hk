import React from "react";

import "./LinkList.scss";
import { Link } from "react-router-dom";

const LinkList = (props) => {
  console.log(props);
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <Link
        to={link.url}
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {link.text}
      </Link>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;
