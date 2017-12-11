/**
 * Created by chenzhongying on 2017/12/10.
 */
const locations  = function(state = {
   
},action){
    switch (action.type){
        case "LOCATIONS":
            return {
                ...state,
                locations:action.locations
            };
        default:
            return state
    }
};
export default locations;