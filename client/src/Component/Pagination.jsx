
import { Link } from "react-router-dom"

function Pagination() {
     return (
          <>
               <nav aria-label="Page navigation example">
                    <ul className=" pagination m-auto justify-content-center size-20 py-14">
                         <li className="page-item">
                              <a className="page-link" href="#" aria-label="Previous">
                                   <span aria-hidden="true">&laquo;</span>
                                   <span className="sr-only">Previous</span>
                              </a>
                         </li>
                         <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                         <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                         <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                         <li className="page-item">
                              <Link className="page-link" to="#" aria-label="Next">
                                   <span aria-hidden="true">&raquo;</span>
                                   <span className="sr-only">Next</span>
                              </Link>
                         </li>
                    </ul>
               </nav>
          </>
     )
}

export default Pagination
