

function clearElement(ele){
    while(ele.firstChild){
        ele.removeChild(ele.firstChild);
    }
    return
}





export {
    clearElement
}