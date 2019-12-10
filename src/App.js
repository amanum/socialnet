import React, {Component} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
// import DialogsPage from "./components/DialogsPage/DialogsPage";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
// import ProfilePageContainer from "./components/ProfilePage/ProfilePageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const ProfilePageContainer = React.lazy(() => import ('./components/ProfilePage/ProfilePageContainer'))
const DialogsPage = React.lazy(() => import ('./components/DialogsPage/DialogsPage'))

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <Sidebar/>
                <Route path="/profile/:userId?" render={withSuspense(ProfilePageContainer)}/>
                <Route path="/dialogs" render={withSuspense(DialogsPage)}/>
                <Route path="/users" render={withSuspense(UsersPageContainer)}/>
                <Route path="/login" render={() => <LoginPage/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const SamuraiJSApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJSApp
