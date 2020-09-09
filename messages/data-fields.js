const dataFieldMessages = {
    DataFieldSuccessDelete: {
        msg: {
            en: 'Data field was successfully deleted',
            he: 'שדה הנתונים נמחק בהצלחה'
        },
        status: 200
    },
    InvalidFieldType: {
        msg: {
            en: 'Field type is invalid',
            he: 'סוג השדה לא תקין'
        },
        status: 400
    },
    InvalidDataType: {
        msg: {
            en: 'Data type is invalid',
            he: 'סוג הנתונים לא תקין'
        },
        status: 400
    },
    InvalidValidatorType: {
        msg: {
            en: 'Validator type is invalid',
            he: 'סוג בודק התקינות לא תקין'
        },
        status: 400
    },
    ValidatorTypeRequired: {
        msg: {
            en: 'Validator type is required',
            he: 'סוג בודק תקינות נדרש'
        },
        status: 400
    },
    MinMaxRequired: {
        msg: {
            en: "Min and max values are required for num range validator",
            he: "ערכים מינימיליים ומקסימליים נדרשים בבדיקת טווח ערכים"
        },
        status: 400
    },   
    ValidatorNotExist: {
        msg: {
            en: 'Validator not exist',
            he: 'בודק התקינות לא קיים'
        },
        status: 404
    },
    DataFieldNotExist: {
        msg: {
            en: 'Data field does not exist',
            he: 'שדה הנתונים לא קיים'
        },
        status: 404
    }
}

module.exports = dataFieldMessages;