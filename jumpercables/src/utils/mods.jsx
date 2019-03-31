let util = {
    skipDefault: (e) => {
        e.preventDefault();
    },
    
	
    isEmptyObject: (obj) => {
        return (Object.getOwnPropertyNames(obj).length === 0);
    }
};

export default util;