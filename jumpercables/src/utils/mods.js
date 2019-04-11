let util = {
    skipDefault: (e) => {
        e.preventDefault();
    },
    
	
    isEmptyObject: (obj) => {
        return (Object.getOwnPropertyNames(obj).length === 0);
    },

    handleCheckboxChange(event) {
        return event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    }
};



export default util;