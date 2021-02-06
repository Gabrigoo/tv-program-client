import React, { useEffect, useState } from 'react';

import { getTVProgramData } from './axios/instance';
import { instance as axios } from './axios/instance';
import Header from './components/Header';
import Program from './components/Program';
import './App.css';

const App = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [data, setData] = useState(null);

  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    async function fetchData() {
      const response = await getTVProgramData(selectedDate, source);
      if (response) {
        setData(response);
        setChannel(Object.keys(response)[0])
      }
    }
    fetchData();
    return () => {
      source.cancel('GET request cancelled');
    }
  }, [selectedDate]);
  
  return (
    <div>
      <Header 
        data={data}
        setChannel={setChannel}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {data && channel ?
        data[channel] ?
          <div id="program-book">
            {data[channel].map((item, index) =>
              <Program key={item + index} data={item} />
            )}
          </div>
        :
          <h2>NO DATA AVAILABLE</h2>
      : null
      }
    </div>
  )
}

export default App;
