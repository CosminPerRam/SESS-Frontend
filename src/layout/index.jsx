import {TitleBar} from "./TitleBar";
import {NavBar} from "./NavBar";
import {TipBar} from "./TipBar";
import {Content} from "./Content";
import "./layout.scss"
import "../common/common.scss"
export const Layout = () => {
    
    return <div className='layout'>
        <TitleBar/>
        <NavBar/>
        <Content />
        <TipBar />
    </div>
}