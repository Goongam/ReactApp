import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);

  const onChange = (event) => setMoney(event.target.value);

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => 
      response.json()
    ).then(json => {
      setCoins(json);
      setLoading(false);
    });
  },[]);
  return (
    <div>
      <h1>The Coins({coins.length})</h1>

      

      {loading ? <strong>Loading...</strong> 
      : 
      <div>
        <input 
          type="number" 
          placeholder="input your Money..."
          onChange={onChange}
        />
        <select>
          {coins.map((coin, index) => 
          <option key={index}>
            {coin.name} ({coin.symbol}): {Math.floor(money/coin.quotes.USD.price)} BTC
          </option>)}
        </select>
      </div>
      }    
      
    </div>
  );
}

export default App;
