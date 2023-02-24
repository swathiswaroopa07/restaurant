import {combineReducers} from "redux";
import tablereducer from "./tablereducer";
import filterreducer from "./filterreducer"
import ordereducer from "./orderreducer";

const reducer = combineReducers({
    tablereducer : tablereducer,
    filterreducer : filterreducer,
    ordereducer : ordereducer
})

export default reducer;