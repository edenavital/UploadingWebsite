import React from "react";
import "./MediaItem.css";
import DeleteButton from "../DeleteButton/DeleteButton";
//props: id, name, path, deleteImageHandler(id), enlargeImageHandler(path)

interface Props {
  deleteImageHandler: (id: number) => void;
  enlargeImageHandler: (path: string) => void;
  path: string;
  id: number;
  name: string;
}

const MediaItem: React.FC<Props> = ({
  path,
  enlargeImageHandler,
  deleteImageHandler,
  id,
  name
}) => (
  <div className="MediaItem" onClick={() => enlargeImageHandler(path)} >
    <DeleteButton deleteImageHandler={() => deleteImageHandler(id)} />
    <img src={path} alt="Media" />
    <h4>{name}</h4>
  </div>
);

export default MediaItem;
