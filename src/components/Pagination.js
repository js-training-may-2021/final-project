import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ScrollToTop from './Scroll';

const List = styled.ul`
    max-width: 950px;
    margin: 30px auto;
    text-align: center;
    display: flex;
    background-color: #fff;
    padding: 15px 0;
    padding-left: 10px;

    @media(max-width: 1050px) {
        max-width: 600px;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media(max-width: 700px) {
        max-width: 400px;
    }
`
const Element = styled.li`
    margin-right: 9px;
    color: #696969;
    text-decoration: none;
    padding: 3px;
    border-radius: 5px;
    
    &:hover {
        background: #FFEF9C;
    }

    &:active {
        background: #FFE34E;
    }

`

function Pagination({perPage, total, paginate}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(total/perPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <List className='pagination'>
            {
                pageNumbers.map(element => (
                    <Link to={`/${element}`} key={element}>
                        <ScrollToTop />
                        <Element onClick={() => {paginate(element)}}>
                            {element}
                        </Element>
                    </Link>
                ))
            }
        </List>
    )
}

export default Pagination