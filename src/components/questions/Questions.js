import React, { useState } from 'react'
import { useRouteMatch, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TopLinks from '../layout/TopLinks';
import QuestionsRouter from './QuestionsRouter';

function Stats() {
    let { path } = useRouteMatch();
    const { pathname } = useLocation();

    const paths = useSelector(state => state.paths.paths)

    const linksList = ([{name: 'כללי', url: `${path}/general`},
    ...paths.map(pathItem => ({
        name: pathItem.name,
        url: `${path}/${pathItem._id}`
    }))])

    return (
        <div>
            <div className="top-content-nav">
                <TopLinks 
                className="top-links-profile-nav"
                selected={pathname}>
                    {linksList.map(link => 
                        <Link
                        className="profile-link" 
                        key={link.url} 
                        to={link.url} 
                        id={link.url}>
                            {link.name}
                        </Link>
                        )}
                </TopLinks>
            </div> 
            
            <QuestionsRouter />
        </div>
    )
}

export default Stats
