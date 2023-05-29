import { useState } from "react"

export const TabButton = ({ title }) => {
    const [clicked, setClicked] = useState(false)

    return (
        <button class='TabButton' onClick={() => setClicked(!clicked)} style={clicked ? {
            color: '$buttonTextLight',
            border: '1px solid $border',
            borderBottom: 'none',
            height: '27px'
        } : null}>
            {title}
        </button>
    )
}