import {Input} from "./Input";

// todo!
export const TopInput = ({value, handleInput, menu}) => {
    return <Input type='search' className={'top-input'} value={value} handleInput={handleInput} menu={menu}/>
}