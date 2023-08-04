import {TitleBar} from "./TitleBar";
import {NavBar} from "./NavBar";
import {TipBar} from "./TipBar";
import {Content} from "./Content";
import "./layout.scss"
import "../common/common.scss"
import {useDispatch, useSelector} from "react-redux";
import {setRef} from "../redux/contextMenu/slice";
import {useRef} from "react";
import {useClickOutside} from "../hooks/useClickOutside";
export const Layout = () => {
    
    return <div className='layout'>
        <TitleBar/>
        <NavBar/>
        <Content />
        <TipBar />
    </div>
}