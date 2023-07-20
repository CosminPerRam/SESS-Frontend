import {TitleBar} from "./TitleBar";
import {NavBar} from "./NavBar";
import {TipBar} from "./TipBar";
import {Content} from "./Content";

export const Layout = () => {
    return <div className={'Layout'}>
        <TitleBar/>
        <NavBar/>
        <Content />
        <TipBar />
    </div>
}