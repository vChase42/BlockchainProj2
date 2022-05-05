
//comment this out when saving changes
// import Moralis from "moralis";


Moralis.Cloud.define("searchEthAddress", async (request) => {
   //PLACEHOLDER
});

Moralis.Cloud.define("getEthTransactions", async(request) => {
  const logger = Moralis.Cloud.getLogger();
  const address = request.params.address.toLowerCase();
  const squery = new Moralis.Query("_AddressSyncStatus");
  squery.equalTo("address",address);
  const queryCount = await squery.count();

  if(Number(queryCount) <= 0) {
      await Moralis.Cloud.run("watchEthAdress", {address: address, sync_historical: true}, {useMasterKey: true});
      // const { fetch, data, error, isLoading, isFetching} = useMoralisCloudFunction("getEthTransactions", {address: watchAddress});
  }
  logger.info(await squery.count());

  const query1 = new Moralis.Query("EthTransactions")
  query1.equalTo("from_address", address);
  
  const query2 = new Moralis.Query("EthTransactions");
  query2.equalTo("to_address", address);
  
  const query = Moralis.Query.or(query1, query2);
  query.descending("block_number");
  query.withCount();
  const results = await query.find();
  return {synced: true, results: results};

});