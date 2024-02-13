import {createStore} from "vuex";
import state from "./state.js";
import * as actions from "./actions.js";
import * as mutations from "./mutations.js";
const store = createStore(
    {
        state,
        actions,
        mutations
    }
)
export default store;
