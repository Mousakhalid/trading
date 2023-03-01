import { VscTriangleDown } from "react-icons/vsc";

const Search = ({ data }) => {
  return (
    <div className="webtrader-search">
      <div className="mt-4 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#333358] p-2 rounded-lg outline-none border-2 border-blue-500"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="text-white font-semibold">Currenices</p>
        <button className="text-gray-300 font-semibold px-3 py-1.5 bg-[#1F2937] rounded-lg hover:bg-blue-500">
          Markets
        </button>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-3 place-items-center">
          <p className="text-gray-300 font-semibold">Symbol</p>
          <p className="text-gray-300 font-semibold">Sell</p>
          <p className="text-gray-300 font-semibold">Buy</p>
        </div>


        <div className="grid grid-cols-3 place-items-center mt-4 bg-[#1A1D33] p-2 rounded-lg hover:bg-[#333358] cursor-pointer">
        {data?.map((item) => (
          <div key={item}>
          <div className="flex items-center">
            <VscTriangleDown className="text-red-600" />
            <p className="text-white text-xs font-semibold ml-2">EUR/USD</p>
          </div>
          <p className="text-red-600">{item.open}</p>
          <p className="text-red-600">{item.close}</p>
          </div>
          ))}
        </div>


        {/* <div className="grid grid-cols-3 place-items-center mt-4 bg-[#1A1D33] p-2 rounded-lg hover:bg-[#333358] cursor-pointer">
          <div className="flex items-center">
            <VscTriangleDown className="text-red-600" />
            <p className="text-white text-xs font-semibold ml-2">EUR/USD</p>
          </div>
          <p className="text-red-600">1,06962</p>
          <p className="text-red-600">1,06992</p>
        </div> */}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const API_KEY = process.env.CRYPTO_INTRADAY_API_KEY;
  const SYMBOL = "BTCUSD"; // Replace with the crypto symbol you want to fetch
  const INTERVAL = "1min"; // Replace with the interval you want to fetch

  const response = await fetch(
    `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=${SYMBOL}&market=USD&apikey=${API_KEY}&interval=${INTERVAL}`
  );

  const data = response.data;

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default Search;
