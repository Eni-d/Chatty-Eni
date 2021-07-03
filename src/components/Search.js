import React from 'react'

function Search() {
    return (
        <div className="container">
            <div className="input-field">
                <input type="text" name="search" />
                <label htmlFor="search">
                    <i className="la la-search"></i>
                    {' '}
                    Search
                </label>
            </div>
        </div> 
    )
}

export default Search
