import React, { useEffect, useState, Fragment } from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getPriorityTable } from '../../redux/selectors/datatables';
import { getAllPaths } from '../../redux/selectors/paths';
import Loadbar from '../layout/Loadbar';
import StatsRouter from './StatsRouter';
import Topbar from './topbar/TopBar';

function Stats() {
    let history = useHistory()
    let { path } = useRouteMatch()
    const paths = useSelector(getAllPaths)
    const activeTable = useSelector(getPriorityTable)

    useEffect(() => {
        if(activeTable) {
            history.push(`${path}/${paths[0]._id}/${activeTable._id}/table`)
        }
    }, [activeTable])
    
    if(!activeTable) {
        return <Fragment></Fragment>
    }

    return (
        <div className="stats-main">
            <Fragment>
                <Topbar tableId={activeTable._id} />
                <StatsRouter />
            </Fragment>
        </div>
    )
}

export default Stats
