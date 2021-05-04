import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import CalcItem from './CalcItem';
import { useSelector } from 'react-redux';
import { getUnisByCalcs } from '../../../../../redux/selectors/unis';
import { isLoading } from '../../../../../redux/loader/selectors';
import { SIMULATE_CALCS } from '../../../../../redux/actions/types';
import Loadbar from '../../../../layout/Loadbar';

export default function CalcsBlock({ calcs, changeStartSimulate }) {
    const [display, setDisplay] = useState(true)

    const unis = useSelector(getUnisByCalcs(calcs))

    const loading = useSelector(isLoading(SIMULATE_CALCS))

    return (
        <Fragment>
        <div 
        onClick={() => setDisplay(!display)}
        className={`exit-calcs-block
        ${display ? 'display' : ''}`}>
            <i className="material-icons">
            {display   
                ? 'close'
                : 'expand_less'
            }
            </i>
        </div>
        <div className={`calculator-calcs-block
        ${display ? 'display' : ''}`}> 
            <div className="calcs-list scrollbar-main">
                {unis.map(uni => 
                    <div 
                    key={uni._id}
                    className="calc-uni-item">
                        <span className="uni-name">
                            {uni.name}
                        </span>
                        <div className="uni-calcs-list">
                            {calcs.map(calc => 
                                calc.uni === uni._id &&
                                <CalcItem
                                key={calc._id}
                                calc={calc}
                                uniColor={uni.color} />
                            )}                        
                        </div>
                    </div>
                )}
            </div>
            <div
            className="exec-sim-calcs"
            onClick={() => changeStartSimulate(true)}>
                {loading 
                ?   <Loadbar invert={true} small={true} />
                :   <i className="material-icons">
                        navigate_before
                    </i>
                }
            </div>
        </div>
    </Fragment>
    )
}

CalcsBlock.propTypes = {
    calcs: PropTypes.array.isRequired
}
