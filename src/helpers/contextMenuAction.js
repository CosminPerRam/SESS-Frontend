
export const contextMenuAction = ({setPoints, action = () => {}}) => (e) => {
  e.preventDefault();
  setPoints({
    x: e.pageX,
    y: e.pageY,
  });
  action();
}
