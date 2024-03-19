import React from "react";
import {Sizes} from "../../utils/utils.js";
import "./Access.scss";

interface AccessData {
  title: string;
  description: string;
  icon: React.ReactElement;
  size?: Sizes;
  url: string;
}

export default function Access({
  title,
  description,
  icon,
  size,
  url,
}: AccessData) {
  const itemClass = size === "small" ? "item-sm" : "";

  return (
    <a href={url} className={`list-group-item ${itemClass}`}>
      {/* Renderizamos el icono de manera dinámica sin contenedor adicional */}
      {icon}
      <div className="access-content">
        <span className="access-title">{title}</span>
        <p className="access-text">{description}</p>
      </div>
    </a>
  );
}
