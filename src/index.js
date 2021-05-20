import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, {
      useFirestoreForProfile: true,
      userProfile: "users",
      attachAuthIsReady: true,
    }), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducers from "./store/reducers/rootReducer";
// import { Provider, useSelector } from "react-redux";
// import thunk from "redux-thunk";
// import { createFirestoreInstance, reduxFirestore } from "redux-firestore";
// import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
// import firebase from "firebase/app";
// import fbConfig from "./config/fbConfig";
// const rrfConfig = {
//   userProfile: "users",
//   useFirestoreForProfile: true, //include if using firestore
//   attachAuthIsReady: true, //include if using firebase auth
// };

// const store = createStore(
//   rootReducers,
//   compose(applyMiddleware(thunk), reduxFirestore(fbConfig))
// );

// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance,
// };

// ReactDOM.render(
//   <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
//       <App />
//     </ReactReduxFirebaseProvider>
//   </Provider>,
//   document.getElementById("root")
// );
