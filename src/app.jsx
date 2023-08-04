import {ApolloConfiguration} from "./core/ApolloConfiguration";
import {Console} from "./console";
import {Layout} from "./layout";
import {renderActiveMenu} from "./helpers/renderActiveMenu";
import {useClickOutside} from "./hooks/useClickOutside";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {setRef} from "./redux/contextMenu/slice";

export const App = () => {
    
  return (
    <div className={'app'}>
      <ApolloConfiguration>
        <Console>
          <Layout />
        </Console>
          {renderActiveMenu()}
      </ApolloConfiguration>
    </div>
  );
}
