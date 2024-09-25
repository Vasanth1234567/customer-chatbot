import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/dashboard')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Chatbot Dashboard</h1>
      <h2>Unresolved Queries: {data.unresolved}</h2>
      <h3>Sentiment Analysis</h3>
      <ul>
        <li>Positive: {data.sentiment?.positive}</li>
        <li>Negative: {data.sentiment?.negative}</li>
        <li>Neutral: {data.sentiment?.neutral}</li>
      </ul>
      <h3>Conversations</h3>
      <ul>
        {data.conversations?.map((conv, index) => (
          <li key={index}>{conv.query} - {conv.response}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
