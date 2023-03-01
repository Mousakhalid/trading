const Dashboard = () => {
  return (
    <div>
      <div>
        <h2>ACCOUNT INFORMATION</h2>
        <div className="bg-white">
          <div className="grid grid-cols-2">
            <div>
              <h4>FIRST NAME</h4>
              <p>Bilal</p>
            </div>
            <div>
              <h4>LAST NAME</h4>
              <p>Ahmad</p>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div>
              <h4>ACCOUNT ID</h4>
              <p>#250720</p>
            </div>
            <div>
              <h4>BALANCE</h4>
              <p>74434.18 EUR</p>
            </div>
            <div>
              <h4>CREDIT</h4>
              <p>0 EUR</p>
            </div>
            <div>
              <h4>TOTAL INVESTMENT</h4>
              <p>1897342.41 EUR</p>
            </div>
            <div>
              <h4>TOTAL MARGIN</h4>
              <p>186665.71 EUR</p>
            </div>
            <div>
              <h4>P/L</h4>
              <p>-25565.82</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <h2>FAVORITE MARKETS</h2>
      </div> */}
    </div>
  );
};

export default Dashboard;
