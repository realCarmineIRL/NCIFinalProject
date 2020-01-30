import React, { useState, useEffect } from "react";

import helloService from './services/helloService';

function App() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    if(!item) {
      getHello();
    }
  })

  const getHello = async () => {
    let res = await helloService.getAll();
    console.log(res);
    setItem(res);
  }

  const renderItem = item => {
    return (
      <div>
        <h2>{item.info}</h2>
      </div>
    );
  };

  return (
    <div className="App">
      <ul>
        {(item && item.length > 0) ? (
          item.map(item => renderItem(item))
        ) : (
          <p>Nothing to display</p>
        )}
      </ul>
    </div>
  );
}

export default App;
