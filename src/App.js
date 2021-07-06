import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import initializeApp from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <DialogsContainer
              store={this.props.store}
            />}/>
            <Route path='/profile/:userId?' render={() => <ProfileContainer
              store={this.props.store}
            />}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/login' component={Login}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapDispatchToProps, {initializeApp}))(App);
