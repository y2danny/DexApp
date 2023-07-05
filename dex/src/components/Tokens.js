import React, { useEffect } from 'react';

function Tokens() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          {
            "description": "",
            "proName": "BINANCE:BTCUSDT"
          },
          {
            "description": "",
            "proName": "BINANCE:ETHUSDT"
          },
          {
            "description": "",
            "proName": "CRYPTOCAP:USDT"
          },
          {
            "description": "",
            "proName": "CRYPTOCAP:USDC"
          },
          {
            "description": "",
            "proName": "CRYPTOCAP:ADA"
          },
          {
            "description": "",
            "proName": "CRYPTOCAP:MATIC"
          },
          {
            "description": "",
            "proName": "CRYPTOCAP:SOL"
          },
          {
            "description": "",
            "proName": "CRYPTOCAP:BNB"
          },
          {
            "description": "",
            "proName": "BINANCE:ARBUSDT"
          },
          {
            "description": "",
            "proName": "CRYPTOCAP:AAVE"
          },
          {
            "description": "",
            "proName": "CRYPTOCAP:UNI"
          }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": true,
        "displayMode": "adaptive",
        "locale": "en"
      }
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default Tokens;