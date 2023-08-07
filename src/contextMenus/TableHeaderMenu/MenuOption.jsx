﻿import {Label} from "../../common/Label";
import {CheckMark} from "../../common/CheckMark";

export const MenuOption = ({ title, checked = false, disabled = false, onChanged}) => {
    return <div className="context-menu-element"  onMouseDown={onChanged}>
        <div className="checkmark-wrapper">
            { checked ? <CheckMark disabled={disabled} /> : null }
        </div>
        
        <Label name={title} style={disabled ? {color: '#847A68'} : {}}/>
    </div>
}