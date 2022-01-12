import './App.css';
import MoviePage from "./components/MoviePage/MoviePage"
import { connect } from 'react-redux';
import { actions } from "./actionCreator"
import { useEffect } from 'react';

function App(props) {

  useEffect(()=>{
    props.getMovie();
  },[])

  useEffect(()=>{
    console.log(props.movie)
  },[props.movie])

  return (
    <div>
      <MoviePage 
        movie = {props.movie}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  movie: state.movie
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: ()=> dispatch(actions.getMovie()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)