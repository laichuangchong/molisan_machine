const tabBar  = function(state = {
    tab:'advertisement'
},action){
    switch (action.type){
        case "TABBAR":
        return {
            ...state,
            tab:action.tab
        };
        default:
            return state
    }
};
export default tabBar;