import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Dashboard from './components/dashboard/dashboard';

const client = new ApolloClient({
  uri: "http://127.0.0.1:4000/api/",
  cache: new InMemoryCache()
});

// todo : need some sort of specialized data structure to deal with routes (like a tree)
const Router = () => {
  if (window.location.pathname == "/") {
    return <Dashboard />
  }

  else {
    return <p>404</p>
  }
}


function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router/>
      </ApolloProvider>
    </div>
  );
}

export default App;
