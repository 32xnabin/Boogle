import { createStore } from "react-redux";

import rootReducer from "../redux/rootReducer";

const store = createStore(rootReducer);

export default store;
