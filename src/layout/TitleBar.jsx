import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Title } from "./Title";

export const TitleBar = () => {
  return (
    <div className='title-bar'>
      <Title title={"Servers"} />
      <FontAwesomeIcon icon={faXmark} style={{ fontSize: "12px" }} />
    </div>
  );
};
