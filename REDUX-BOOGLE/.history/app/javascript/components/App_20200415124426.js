import React from "react";
import { Provider } from "react-redux";

// import CakeContainer from './components/CakeContainer'
// import HooksCakeContainer from './components/HooksCakeContainer'
// import IceCreamContainer from './components/IceCreamContainer'
// import NewCakeContainer from './components/NewCakeContainer'
// import ItemContainer from './components/ItemContainer'
import UsersContainer from "./UsersContainer";

import { createStore } from "redux";

import userReducer from "./userReducer";

const store = createStore(userReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer /> */}
      </div>
    </Provider>
  );
}

export default App;