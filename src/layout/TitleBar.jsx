import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// get rid of all fortawesome dependencies, dont forget to yarn remove todo!

import { Title } from "../common/Title";

export const TitleBar = () => {
  return (
    <div className="title-bar">
      <Title title={"Servers"} />
      <FontAwesomeIcon icon={faXmark} style={{ fontSize: "12px" }} />
    </div>
  );
};
