import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import { initMessage } from '../../redux/actions/messages';
import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';
import Default from '../Default';
import Register from '../auth/Register/Register';
import Login from '../auth/Login/Login';
import Profile from '../profile/Profile';
import Admin from '../admin/Admin';
import Steps from '../steps/Steps';
import NoMatchPage from '../layout/NoMatchPage';
import Stats from '../stats/Stats';
import Questions from '../questions/Questions';
import LibrariesCient from '../libraries/LibrariesCient';
import ViewAncs from '../announcements/ViewAncs/ViewAncs';

const Router = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const paths = useSelector(state => state.paths);

    useEffect(() => {
        dispatch(initMessage());
    }, [location])

    return ( 
        <div className="router">
            <Switch>
                <Route exact path="/" component={Default} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route path="/steps/:pathId" component={Steps} />
                <Route path="/qna" component={Questions} />
                <ProtectedRoute path="/profile" component={Profile} />
                <ProtectedRoute path="/announcements" component={ViewAncs} />
                <ProtectedRoute path="/stats" component={Stats} />
                <ProtectedRoute path="/library/:pathId" component={LibrariesCient} />
                <AdminRoute path="/admin" component={Admin} />
                <Route component={NoMatchPage} />  
            </Switch>
        </div>
    )
}

export default Router;