import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomGroup, insertData, removeValue, validError } from '../../../../redux/actions/userdata';
import { 
    getCustomGroupsReal, 
    getDataVals, 
    getFieldValReal, 
    getGroupsValsReal, 
    getGroupValsReal, 
    getRealErrorByCalc,
    getRealValidErrors } from '../../../../redux/selectors/userdata';

import {
    selectRealFieldValue,
    selectRealFieldValues
}  from '../../../../redux/stats/userdata/real-data/selectors';

const useRealData = () => {
    const dispatch = useDispatch()
    const dataVals = useSelector(getDataVals)

    const newCustomGroup = useCallback((dataObj, selTable) => {
        dispatch(addCustomGroup(dataObj, selTable))
    }, [])

    const commitOnChange = useCallback((dataObj, selTable) => {
        dispatch(insertData(dataObj, selTable))
    }, [])

    const execRemoveVals = (data, isStaged, selTable) => {
        const hasData = dataVals.find(val => val.group === data.groupId)
        if(!isStaged || hasData)
            dispatch(removeValue(data, selTable))

        removeStagedGroup(data.groupId)  
    }
    
    const removeStagedGroup = groupId => {
        setStagedGroupsList(stagedGroupsList.filter(stagedGroup =>
            stagedGroup._id !== groupId))
    }

    const [stagedGroupsList, setStagedGroupsList] = useState([])

    const addStagedGroup = group => {
        setStagedGroupsList([...stagedGroupsList, group])
    }

    const customGroups = useSelector(getCustomGroupsReal)

    return {
        newCustomGroup,
        commitOnChange,
        execRemoveVals,
        removeStagedGroup,
        addStagedGroup,
        stagedGroupsList,
        customGroups,
        getFieldVal: getFieldValReal,
        getGroupVals: getGroupValsReal,
        getGroupsVals: getGroupsValsReal,
        validError: validError,
        getValidErrors: getRealValidErrors,
        getErrorByCalc: getRealErrorByCalc,
        selectFieldValues: selectRealFieldValues,
        selectFieldValue: selectRealFieldValue,
        isSimulated: false
    }

}

export default useRealData