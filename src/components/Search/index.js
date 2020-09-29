import React from "react";
//import "./style.css";

function Search(props) {
    return (
        <div className="Search">
            <h1 className="text-center text-info">Search for an employee</h1>
            <div className="col-sm-12 text-center">
                <form onSubmit={props.handleSubmit}>
                    <input type="search" onChange={props.handleInputChange} />
                    <button type="submit" className="btn btn-info">Search</button>
                </form>
            </div>
            <br></br>
        </div>

    )
}

export default Search 