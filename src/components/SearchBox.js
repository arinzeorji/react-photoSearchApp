import React from 'react';

const SearchBox = ({ searchfield, searchchange }) => {

    return (
        <div className="pa2">
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type="search"
                name="search" id="search"
                placeholder="Search MOJA robots"
                onChange={searchchange}
            />
        </div>
    )

}

export default SearchBox;
