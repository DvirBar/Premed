import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getLibraries } from '../../redux/libraries/actions'
import { librariesSelector } from '../../redux/libraries/selectors'
import Loadbar from '../layout/Loadbar'
import TopBar from './TopBar/TopBar'
import LibraryRouter from './LibraryRouter'

function Libraries() {
    const { pathId } = useParams()
    
    const dispatch = useDispatch()

    // Get libraries from api by selected path
    useEffect(() => {
        if(pathId) {
            dispatch(getLibraries(pathId))
        }

    }, [pathId])

    const { 
        loading
    } = useSelector(librariesSelector)

    if(loading) {
        return <Loadbar />
    }

    return (
        <div className="libraries">
            <TopBar />
            {loading
            ?   <Loadbar />
            :   <LibraryRouter />
            }
        </div>
    )
}

export default React.memo(Libraries)
