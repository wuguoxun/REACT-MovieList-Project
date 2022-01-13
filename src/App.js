import './App.css';
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
      <Navbar />
      <Routes>
        <Route path='/' element=
          {<MoviePage
            movie={props.movie}
            page={props.pageNum}
            prevPage={props.prevPage}
            nextPage={props.nextPage}
            getPage={props.getPage}
          />}
        />
        <Route path='/page2' element=
          {
            <div>Hello You Can Place Page2 Here</div>
          }
        />
      </Routes>
      <div>
      </div>
    </Router>

  );
}

const mapStateToProps = (state) => ({
  movie: state.movie,
  pageNum: state.pageNum
});
// test
const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: () => dispatch(actions.getMovie()),
    prevPage: () => dispatch(actions.prevPage()),
    nextPage: () => dispatch(actions.nextPage()),
    getPage: () => dispatch(actions.getPage())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)