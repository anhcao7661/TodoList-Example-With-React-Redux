import reducer from "../features/reducer";
import { createStore } from "redux";


const store = createStore(reducer);

export default store;