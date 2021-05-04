import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { EXEC_CALC } from '../../../../../redux/actions/types'
import { isLoading } from '../../../../../redux/loader/selectors'
import { hasCalcForYear } from '../../../../../redux/selectors/userdata'
import Loadbar from '../../../../layout/Loadbar'
import { GroupsContext } from '../GroupsContext'
import NoCalc from './NoCalc/NoCalc'
import NoCalcYear from './NoCalcYear/NoCalcYear'
import SuggestedCalc from './SuggestedCalc/SuggestedCalc'

function CalcBlock({ calc, value, suggestedValue, payload }) {
    const {
        getErrorByCalc
    } = useContext(GroupsContext)

    const validError = useSelector(getErrorByCalc(calc._id))

    const calcVersions = calc.versions
    const hasCalc = useSelector(hasCalcForYear(calcVersions, calcVersions?.tableGap))
    const loading = useSelector(isLoading(EXEC_CALC, calc._id))
    return (
        <div className="calc-block-new">
            {hasCalc 
            ? validError
                ?    <NoCalc 
                    calcName={calc.name}
                    validError={validError} />   
                :   loading
                ?   <div className="calc-block-new__loader">
                        <Loadbar small={true} />
                    </div>
                :   <SuggestedCalc
                    suggestedValue={suggestedValue}
                    value={value} 
                    calc={calc}
                    payload={payload} />
            : <NoCalcYear />
            }
        </div>
    )
}

export default CalcBlock
