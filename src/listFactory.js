
const createList = (name)=>{
    return {id: Date.now().toString(), 
        name: name,
         tasks:[]
        }
};

export default createList;