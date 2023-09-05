import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";


const client = new ApolloClient({
  uri: "http://127.0.0.1:4000/api/",
  cache: new InMemoryCache()
});

const query = gql`
 {
  students {
    name,
    id
  }
 }
`

const ComponentTest = () => {
  const { loading, error, data } = useQuery(query);

  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}, {error.graphQLErrors.toString()}, {error.extraInfo}, {error.stack}</p>;

  return data.students.map((student: any) => (
    <div key={student.id}>
      <p>
        {student.name}: {student.id}
      </p>
    </div>
  ));
}


function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <ComponentTest />
      </ApolloProvider>
    </div>
  );
}

export default App;
