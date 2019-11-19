import React from "react";
import "./MediaItem.css";
import DeleteButton from "../DeleteButton/DeleteButton";
//props: id, name, path, deleteImageHandler(id), enlargeImageHandler(path)
import EnlargedImage from "../EnlargedImage/EnlargedImage";

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
  <div className="MediaItem">
    <DeleteButton deleteImageHandler={() => deleteImageHandler(id)} />
    <EnlargedImage enlargeImageHandler={() => enlargeImageHandler(path)} />
    <img src={path} alt="Media" />
    <h4>{name}</h4>
  </div>
);

export default MediaItem;
