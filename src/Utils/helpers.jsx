export const LocalStorage = {
    setItem: (variables) => {
        for(const variable in variables){
            if(variables.hasOwnProperty(variable)) {
                localStorage.setItem(variable, JSON.stringify(variables[variable]));
            }
        }
    },
    getItem: (variables) => {
        for(const variable in variables){
            if(variables.hasOwnProperty(variable)){
                return JSON.parse(localStorage.getItem(variable));
            }
        }
    },
    removeItem: (variables) => {
        for(const variable in variables){
            if(variables.hasOwnProperty(variable)){
                localStorage.removeItem(variable);
            }
        }
    }
}