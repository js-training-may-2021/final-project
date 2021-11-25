import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './paginator.css';


const Paginator = (props) => {
  const [currentPage, setCurrentPage] = useState(props.currentPage);
  const nextPage = +currentPage + 1;
  const prevPage = currentPage - 1;

  const goToPage = (newPage) => {
    props.goToPage(newPage);
    setCurrentPage(newPage);
  }

  if (currentPage === 1) {
    return (
      <nav aria-label="Page navigation" className="d-flex justify-content-center">
        <ul className="pagination text-danger">
          <li className="page-item disabled"><Link to={`/page/${prevPage}`} onClick={() => goToPage(prevPage)} className="page-link">Previous</Link></li>
          <li className="page-item active disabled"><Link to={`/page/1`} className="page-link text-danger">1</Link></li>
          <li className="page-item"><Link to={`/page/2`} onClick={() => goToPage(2)} className="page-link text-danger">2</Link></li>
          <li className="page-item"><Link to={`/page/3`} onClick={() => goToPage(3)} className="page-link text-danger">3</Link></li>
          <li className="page-item"><Link to={`/page/${nextPage}`} onClick={() => goToPage(nextPage)} className="page-link text-danger">Next</Link></li>
        </ul>
      </nav>
    )
  }

  return (
    <nav aria-label="Page navigation" className="d-flex justify-content-center">
      <ul className="pagination text-danger">
        <li className="page-item"><Link to={`/page/${prevPage}`} onClick={() => goToPage(prevPage)} className="page-link text-danger">Previous</Link></li>
        <li className="page-item"><Link to={`/page/${prevPage}`} onClick={() => goToPage(prevPage)} className="page-link text-danger">{prevPage}</Link></li>
        <li className="page-item active"><Link to={`/page/${currentPage}`} className="page-link text-danger">{currentPage}</Link></li>
        <li className="page-item"><Link to={`/page/${nextPage}`} onClick={() => goToPage(nextPage)} className="page-link text-danger">{nextPage}</Link></li>
        <li className="page-item"><Link to={`/page/${nextPage}`} onClick={() => goToPage(nextPage)} className="page-link text-danger">Next</Link></li>
      </ul>
    </nav>
  )
}

export default Paginator;