import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { AssignmentSubmissions, Assignments, Students } from './components/graphql/graphql';
import Dashboard from './components/dashboard/dashboard';

const client = new ApolloClient({
  uri: "http://127.0.0.1:4000/api/",
  cache: new InMemoryCache()
});



function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Dashboard />
      </ApolloProvider>
    </div>
  );
}

export default App;
