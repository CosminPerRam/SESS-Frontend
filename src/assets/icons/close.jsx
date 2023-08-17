export const Close = ({ onClick }) => {
  return (
    <img
      src={"/icons/x.svg"}
      alt={"x icon"}
      width={"8px"}
      height={"8px"}
      onClick={() => onClick()}
    />
  );
};
