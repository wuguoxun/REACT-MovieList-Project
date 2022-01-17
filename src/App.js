import './App.css';
import ErrorBoundary from "./components/ErrorBoundary"
import Navbar from "./components/NavBar/Navbar";
import MoviePage from "./components/MoviePage/MoviePage"
import { connect } from 'react-redux';
import { actions } from "./actionCreator"
import { useEffect } from 'react';
import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App(props) {

  useEffect(() => {
    props.getMovie();
  }, [])

  useEffect(() => {
    props.getPage();
  }, [props.pageNum])

  return (
    <Router>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      <ErrorBoundary>
        <Routes>
          <Route path='/' element=
            {<MoviePage
              movie={props.movie}
              page={props.pageNum}
              prevPage={props.prevPage}
              nextPage={props.nextPage}
              getPage={props.getPage}
              handleLike={props.like}
              handleUnlike={props.unlike}
              likeList={props.likeList}
            />}
          />
        </Routes>
      </ErrorBoundary>

    </Router>

  );
}

const mapStateToProps = (state) => ({
  movie: state.movie,
  pageNum: state.pageNum,
  likeList: state.likeList
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: () => dispatch(actions.getMovie()),
    prevPage: () => dispatch(actions.prevPage()),
    nextPage: () => dispatch(actions.nextPage()),
    getPage: () => dispatch(actions.getPage()),
    like: (id) => dispatch(actions.like(id)),
    unlike: (id) => dispatch(actions.unlike(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)