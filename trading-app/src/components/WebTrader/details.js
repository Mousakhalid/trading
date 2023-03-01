const Details = () => {
  return (
    <div className="absolute left-[390px] top-[460px]">
      <div className="table-container">
        <table>
          <thead>
            <tr className="border-b-2 border-gray-600">
              <th className="table-heading">Order ID</th>
              <th className="table-heading">Symbol</th>
              <th className="table-heading">Type</th>
              <th className="table-heading">Size</th>
              <th className="table-heading">Open Size</th>
              <th className="table-heading">Current Price</th>
              <th className="table-heading">Open Time</th>
              <th className="table-heading">S/L</th>
              <th className="table-heading">T/P</th>
              <th className="table-heading">Profit</th>
              <th className="table-heading">Swap</th>
              <th className="table-heading">Commission</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-gray-600">
              <td className="table-details">225603</td>
              <td className="table-details">EUR/USD</td>
              <td className="table-details">BUY</td>
              <td className="table-details">1</td>
              <td className="table-details">1.06877</td>
              <td className="table-details">1.06962</td>
              <td className="table-details">2023-02-21</td>
              <td className="table-details">--</td>
              <td className="table-details">--</td>
              <td className="table-details">64.28</td>
              <td className="table-details">14.19</td>
              <td className="table-details">1</td>
            </tr>
            <tr className="border-b-2 border-gray-600">
              <td className="table-details">225602</td>
              <td className="table-details">EUR/USD</td>
              <td className="table-details">SELL</td>
              <td className="table-details">0.01</td>
              <td className="table-details">1.06831</td>
              <td className="table-details">1.06992</td>
              <td className="table-details">2023-02-21</td>
              <td className="table-details">--</td>
              <td className="table-details">--</td>
              <td className="table-details">-1.67</td>
              <td className="table-details">0.15</td>
              <td className="table-details">0.01</td>
            </tr>
            <tr className="border-b-2 border-gray-600">
              <td className="table-details">225568</td>
              <td className="table-details">EUR/USD</td>
              <td className="table-details">SELL</td>
              <td className="table-details">0.1</td>
              <td className="table-details">1.06538</td>
              <td className="table-details">1.06992</td>
              <td className="table-details">2023-02-21</td>
              <td className="table-details">--</td>
              <td className="table-details">--</td>
              <td className="table-details">-43.95</td>
              <td className="table-details">1.41</td>
              <td className="table-details">0.1</td>
            </tr>
            <tr className="border-b-2 border-gray-600">
              <td className="table-details">225567</td>
              <td className="table-details">EUR/USD</td>
              <td className="table-details">BUY</td>
              <td className="table-details">0.1</td>
              <td className="table-details">1.06568</td>
              <td className="table-details">1.06992</td>
              <td className="table-details">2023-02-21</td>
              <td className="table-details">--</td>
              <td className="table-details">--</td>
              <td className="table-details">35.33</td>
              <td className="table-details">1.41</td>
              <td className="table-details">0.1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
