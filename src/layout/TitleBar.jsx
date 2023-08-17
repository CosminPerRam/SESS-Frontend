import { Close } from "../assets/icons/close";
import { Title } from "./Title";

export const TitleBar = () => {
  return (
    <div className='title-bar'>
      <Title title={"Servers"} />
      <Close />
    </div>
  );
};
