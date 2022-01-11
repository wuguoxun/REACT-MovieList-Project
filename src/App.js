import './App.css';
import Main from "./components/Main"
import { connect } from 'react-redux';
import { actions } from "./actionCreator"

function App(props) {


  return (
    <div>
      <p>hello world</p>
      <Main />
    </div>
  );
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)