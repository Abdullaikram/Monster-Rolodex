import React from 'react';

import '../search component/search-style.css'


function Search({ searchData }) {
    return (
        <input type="text" placeholder='search' className='srachstyle' onChange={(e)=>searchData(e.target.value)} />
    )
}

export default Search