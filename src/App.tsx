import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useMoralis, useMoralisCloudFunction } from "react-moralis";

function App() {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user!.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
    }

    // const address = request.params.address.toLowerCase();
    // const usedoSomething = async () => {
    
      // const { fetch, data, error, isLoading, isFetching} = useMoralisCloudFunction("getEthTransactions", {address: account} );
    // console.log(user);

    

  return (
    <div>
      <h1>Moralis Hello World!</h1>
      <button onClick={login}>Moralis Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
      {/* <button onClick={usedoSomething}>DO SOMETHING PLEASE</button> */}
    </div>
  );
}

export default App;
