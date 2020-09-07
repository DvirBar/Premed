import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import useForm from '../../../forms/useForm';
import { addDataField } from '../../../redux/actions/datafields';
import FormInput from '../../common/FormInput';
import Dropdown from '../../common/Dropdown';
import Modal from '../../layout/Modal';

function AddDataField({ path, groups, types }) {
    const [displayModal, setDisplayModal] = useState(false)
    const [defaultValues, setDefaultValues] = useState({})

    useEffect(() => {
        setDefaultValues({
            name: '',
            fieldType: '',
            dataType: '',
            pathId: path.value
        })
    }, [path])

    const {
        handleChange,
        handleSubmit,
        values,
        errors
    } = useForm(addDataField, defaultValues)

    const fieldTypes = types?.fieldTypes;
    const [fieldTypeOptions, setFieldTypeOptions] = useState([]);
    const dataTypes = types?.dataTypes;
    const [dataTypeOptions, setDataTypeOptions] = useState([]);
    const [groupOptions, setGroupOptions] = useState([]);

        
    useEffect(() => {
        if(fieldTypes && fieldTypes.length !== 0) {
            setFieldTypeOptions(fieldTypes.map(type => ({
                name: type.name,
                value: type.value
            })))
        }
    }, [fieldTypes])  

    useEffect(() => {
        if(dataTypes && dataTypes.length !== 0) {
            setDataTypeOptions(dataTypes.map(type => ({
                name: type.name,
                value: type.value
            })))
        }
    }, [dataTypes])  

    

    useEffect(() => {
        setGroupOptions([{ name: 'ללא', value: undefined },
        ...groups.map(group => ({
            name: group.name,
            value: group._id
        }))])
    }, [groups]) 

    const toggleModal = open => {
        setDisplayModal(open)
    }

    return (
        <Fragment>
            <button onClick={() => toggleModal(true)}>
                הוסף שדה
            </button>
            <Modal
            display={displayModal}
            toggleModal={toggleModal}
            title={"הוסף שדה נתונים"}>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                    label="שם"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    error={errors.name} />

                    {dataTypeOptions.length !== 0 &&
                        <Dropdown
                        options={dataTypeOptions}
                        name="dataType"
                        placeholder={{name:"בחר"}}
                        title="סוג נתונים"
                        onChange={handleChange} />
                    }   

                    {fieldTypeOptions.length !== 0 &&
                        <Dropdown
                        options={fieldTypeOptions}
                        name="fieldType"
                        placeholder={{name:"בחר"}}
                        title="סוג שדה"
                        onChange={handleChange} />
                    }

                    {groupOptions.length !== 0 &&
                        <Dropdown
                        options={groupOptions}
                        name="groupId"
                        title="קבוצת נתונים"
                        onChange={handleChange} />
                    }

                    <button type="submit">הוסף</button>
                </form>
            </Modal>
        </Fragment>
    )
}

AddDataField.propTypes = {
    path: PropTypes.object.isRequired,
    groups: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired
}

export default AddDataField
