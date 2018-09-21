export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const objectGetVal = (objKey, obj, typeObj = 'str', def = '') => {
    let returnVal = obj
    const arrChild = objKey.split('.');
    arrChild.forEach(child => {
        if((typeof returnVal === 'object')&&(child in returnVal)){
            returnVal = returnVal[child]
        }else{
            returnVal = def
        }
    })
    switch (typeObj) {
        case 'str':
            returnVal = String(returnVal)
            break
        case 'int':
            returnVal = Number(returnVal)
            break
        case 'obj':
            returnVal = Object(returnVal)
            break
        case 'arr':
            returnVal = Array(returnVal)
            break
        default:
            break
    }
    return returnVal;
}