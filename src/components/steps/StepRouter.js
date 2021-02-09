import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
    Route,
    Switch, 
    useLocation,
    useRouteMatch } from 'react-router-dom';
import { initMessage } from '../../redux/actions/messages';
import StepItem from './StepItem';
import PathSteps from './‎PathSteps';


const StepRouter = () => {
    const dispatch = useDispatch();
    let location = useLocation();
    let { path } = useRouteMatch();

    // Initialize messages when switching url
    useEffect(() => {
        dispatch(initMessage());
    }, [location])

    return ( 
        <Switch>
            <Route exact path={`${path}/:pathId`} component={PathSteps} />
            <Route exact path={`${path}/:pathId/:stepId`} component={StepItem} />
        </Switch>
    )
}

export default StepRouter;