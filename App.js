import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import EntryRouter from "./src/route/EntryRouter";
import store from "./src/store/store";
import {Provider} from "react-redux";


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <EntryRouter />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
