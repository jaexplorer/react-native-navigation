import React from "react";
import Routes from "./src/Routes";
import AuthProvider from "./src/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
