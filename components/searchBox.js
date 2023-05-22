import { DM_Serif_Display } from "next/font/google";
import React from "react";

const SearchBox = (props) => {
    return (
        <div className="col col-sm-4">
            <input className="form-control" placeholder="Search" 
            value={props.value}
            onChange={(e) => { props.SetSearchValue(e.target.value) }}></input>
        </div>
    )
}

export default SearchBox;