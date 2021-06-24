import React from 'react'
 
const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalPokemonsCount / props.pageSize);

    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    return(
        <div>
            {pages.map ( p => {
                return <button key={p} type="button" className={props.currentPage === p ? "btn btn-success" : "btn btn-outline-success"} 
                onClick = { () => {props.onPageChanged(p)} } > {p} </button>
            })}
        </div>
    )
}

export default Pagination;