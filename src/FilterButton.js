import React from "react";

const FilterButton = props => {
    return (
        <button onClick={props.changeFilter}>{props.text}</button>
    )
}

export default FilterButton;