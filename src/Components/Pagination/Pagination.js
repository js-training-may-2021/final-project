import React, {useState} from 'react';
import './Pagination.css';

 
const Pagination = ({totalPokemonsCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalPokemonsCount / pageSize);

    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 5;
    let portionCount = Math.ceil(pagesCount / portionSize);

    let [currentPortion, setCurrentPortion] = useState(1);
    // результат useState - массив из 2х эл-тов (состояние, ф-ция изменяющая состояние 'set..')
    // в саму ф-цию передаем начальное значение состояния;

    // useEffect - симуляция componentDidMount

    let leftNumberOfAPortion = (currentPortion - 1) * portionSize + 1;
    let rightNumberOfAPortion = currentPortion * portionSize;


    return(
        <div className="paginator">
            {currentPortion > 1 && 
                <button className="btn btn-secondary" onClick={() => {
                    setCurrentPortion(currentPortion - 1); 
                    onPageChanged(leftNumberOfAPortion - portionSize)}}>BACK</button>}

            {pages
                .filter(p => p >= leftNumberOfAPortion && p <= rightNumberOfAPortion)
                .map ( p => {
                    return <button key={p} type="button" className={currentPage === p ? "btn btn-success" : "btn btn-outline-success"} 
                    onClick = { () => {onPageChanged(p)} } > {p} </button>
            })}

            {currentPortion < portionCount && 
                <button  className="btn btn-secondary" onClick={() => {
                    setCurrentPortion(currentPortion + 1); 
                    onPageChanged(rightNumberOfAPortion + 1)}}>MORE</button>}
        </div>
    )
}

export default Pagination;