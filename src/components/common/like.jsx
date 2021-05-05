import React, { Component } from "react";

const Like = (props) => {
  let likeClass = "fa fa-heart";
  if (!props.liked) likeClass += "-o";

  return <li onClick={props.onClick} style={{ cursor: "pointer" }} className={likeClass} aria-hidden="true"></li>;
};

export default Like;
