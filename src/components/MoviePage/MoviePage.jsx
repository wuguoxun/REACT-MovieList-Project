import React from "react";
import { useState, useEffect } from "react";
import "./moviePage.css";

function MoviePage(props) {
    const img_url = "https://image.tmdb.org/t/p/w500"

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [curMovie, setCurMovie] = useState("");

    const handleClickOpenModal = (id) => {
        setCurMovie(id)
        setModalIsOpen(true)
    }

    const handleClickCloseModal = () => {
        setModalIsOpen(false)
    }


    return (
        <div>
            <div className="movieDiv">
                {props.movie.map((item, index) => (
                    <div key={item.id}>

                        <div className={modalIsOpen ? 'hidden' : 'posterDiv'}>
                            <div onClick={() => handleClickOpenModal(item.id)}>
                                <div>
                                    <img className="posterImage" src={img_url + item.poster_path} alt="poster_image" />
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </div>
                        {curMovie === item.id &&
                            <div className={modalIsOpen ? "modalContainer" : 'hidden'} style={{ backgroundImage: `url(${img_url + item.backdrop_path})` }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modalContent">
                                    <h2 className="modalTitle">{item.title}</h2>
                                    <button onClick={handleClickCloseModal} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <div className="modaBody">
                                    </div>

                                </div>
                            </div>
                        }
                    </div>
                ))}
                <nav className={modalIsOpen ? "hidden" : undefined} aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MoviePage