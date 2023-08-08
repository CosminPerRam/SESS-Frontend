import {useDispatch} from "react-redux";

export const InputMenu = ({top, left, setInput, input}) => {
    const dispatch = useDispatch();
    const Cut = () => {
        navigator.clipboard.writeText(input).then(() => dispatch(setInput('')));
    }
    
    const Copy = () => {
        navigator.clipboard.writeText(input).then(() => {});
    }
    
    const Paste = () => {
        navigator.clipboard.readText().then(text => dispatch(setInput(input + text)));
    }
    
    return <div className="context-menu" style={{top: top + 'px', left: left + 'px'}}>
        <div className="context-menu-element" onMouseDown={Cut}>Cut</div>
        <div className="context-menu-element" onMouseDown={Copy}>Copy</div>
        <div className="context-menu-element" onMouseDown={Paste}>Paste</div>
    </div>
}