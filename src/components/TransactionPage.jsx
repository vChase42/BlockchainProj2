import { useEffect, useState } from "react";
import { useMoralis, useMoralisCloudFunction, useMoralisQuery } from "react-moralis";
import SearchBar from "./SearchBar";
import TransactionTable from "./TransactionTable";

const TransactionPage = (props) => {
    const [watchAddress, setWatchAddress] = useState("0x3057471208FEe8D6a079ae7664B89211497A4883");
    

    

    //helper function to extract array of transactions from the object that 'getEthTransactions' returns
    const postProcess = (raw) => {
        return (raw?.results?.map((res) => {
            return res.attributes
        }) || []);
    }

    return (
        <div>
            <SearchBar setAddress={/*Placeholder*/() => {}}/>
            <TransactionTable loading={/*Placeholder*/true} transactions={postProcess([]/*Placeholder*/)}/>
        </div>
    )  
};

export default TransactionPage;