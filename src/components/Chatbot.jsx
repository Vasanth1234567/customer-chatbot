// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function Chatbot() {
// //   const [query, setQuery] = useState('');
// //   const [response, setResponse] = useState({});

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     axios.post('http://localhost:5000/api/chatbot', { query })
// //       .then(res => setResponse(res.data))
// //       .catch(err => console.error(err));
// //   };

// //   return (
// //     <div>
// //       <h1>Chat with our Bot</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input 
// //           type="text" 
// //           value={query} 
// //           onChange={(e) => setQuery(e.target.value)} 
// //           placeholder="Ask your question..."
// //         />
// //         <button type="submit">Send</button>
// //       </form>
// //       <div>
// //         <h2>Bot Response</h2>
// //         <p>Intent: {response.intent}</p>
// //         <p>Sentiment: {response.sentiment}</p>
// //         <p>Recommendations: {response.recommendations?.join(', ')}</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Chatbot;

// import React, { useState } from 'react';
// import axios from 'axios';

// function Chatbot() {
//   const [query, setQuery] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send the user's query to the backend
//     axios.post('http://localhost:5000/api/chatbot', { query })
//       .then(res => setResponse(res.data.message))
//       .catch(err => console.error(err));
//   };

//   return (
//     <div>
//       <h1>Chat with our Bot</h1>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           value={query} 
//           onChange={(e) => setQuery(e.target.value)} 
//           placeholder="Ask your question..."
//         />
//         <button type="submit">Send</button>
//       </form>
//       <div>
//         <h2>Bot Response</h2>
//         <p>{response}</p>
//       </div>
//     </div>
//   );
// }

// export default Chatbot;


// src/Chatbot.jsx
// import React, { useState } from 'react';
// import './Chatbot.css';
// import axios from 'axios';

// const Chatbot = () => {
//     const [userInput, setUserInput] = useState('');
//     const [chatHistory, setChatHistory] = useState([]);

//     const handleInputChange = (e) => {
//         setUserInput(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Add user input to chat history
//         const newChatHistory = [...chatHistory, { sender: 'user', text: userInput }];
//         setChatHistory(newChatHistory);

//         // Send user input to the backend
//           axios.post('http://localhost:5000/api/chatbot', {userInput})
//           .then(res => {
//             setChatHistory(res.data.message);
//             // const data = res.data.message;
//             newChatHistory.push({ sender: 'bot', text: chatHistory });
//             setChatHistory(newChatHistory);
//           })
//           .catch(error =>{
//             setChatHistory([...newChatHistory, { sender: 'bot', text: 'Sorry, something went wrong. Please try again.' }])});
//       }
//     return (
//         <div className="chatbot-container">
//             <h2>Chatbot</h2>
//             <div className="chat-window">
//                 {chatHistory.map((chat, index) => (
//                     <div key={index} className={`chat-message ${chat.sender}`}>
//                         <strong>{chat.sender === 'user' ? 'You' : 'Bot'}:</strong> {chat.text}
//                     </div>
//                 ))}
//             </div>
//             <form onSubmit={handleSubmit} className="chat-input">
//                 <input
//                     type="text"
//                     value={userInput}
//                     onChange={handleInputChange}
//                     placeholder="Type your message..."
//                     required
//                 />
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//     );
// };

// export default Chatbot;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './Chatbot.css'; // Make sure to import the CSS file

// function Chatbot() {
//   const [query, setQuery] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     // Send the user's query to the backend
//     // axios.post('http://localhost:5000/api/chatbot', { query })
//     //   .then(res => setResponse(res.data.message))
//     //   .catch(err => console.error(err));

//     try {
//       const chatbotResponse = await axios.post('http://localhost:5000/api/chatbot', { query });

//     // Ensure intents and entities are defined and fallback to empty arrays if not
//     const intents = chatbotResponse.data.intents ? chatbotResponse.data.intents.join(", ") : "No intents detected";
//     const entities = chatbotResponse.data.entities ? chatbotResponse.data.entities.map(ent => `${ent.text} (${ent.label})`).join(", ") : "No entities detected";

//     setResponse(`Intents: ${intents}, Entities: ${entities}`);
//     } catch (error) {
//       console.error('Error getting response:', error);
//       setResponse('Error processing your request.');
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <h1>Chat with our Bot</h1>
//       <form className="chatbot-form" onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           value={query} 
//           onChange={(e) => setQuery(e.target.value)} 
//           placeholder="Ask your question..."
//         />
//         <button type="submit">Send</button>
//       </form>
//       <div className="response-container">
//         <h2>Bot Response</h2>
//         <p>{response}</p>
//       </div>
//     </div>
//   );
// }

// export default Chatbot;


// import React, { useState } from 'react';
// import axios from 'axios';

// function Chatbot() {
//   const [query, setQuery] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const chatbotResponse = await axios.post('http://localhost:5000/api/chatbot', { query });
//       setResponse(chatbotResponse.data.message);
//     } catch (error) {
//       console.error('Error getting response:', error);
//       setResponse('Error processing your request.');
//     }
//   };

//   return (
//     <div>
//       <h1>Chat with our Bot</h1>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           value={query} 
//           onChange={(e) => setQuery(e.target.value)} 
//           placeholder="Ask your question..."
//         />
//         <button type="submit">Send</button>
//       </form>
//       <div>
//         <h2>Bot Response</h2>
//         <p>{response}</p>
//       </div>
//     </div>
//   );
// }

// export default Chatbot;

// src/Chatbot.jsx
// import React, { useState } from 'react';
// import './Chatbot.css';

// const Chatbot = () => {
//     const [userInput, setUserInput] = useState('');
//     const [chatHistory, setChatHistory] = useState([]);

//     const handleInputChange = (e) => {
//         setUserInput(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Add user input to chat history
//         const newChatHistory = [...chatHistory, { sender: 'user', text: userInput }];
//         setChatHistory(newChatHistory);

//         // Send user input to the backend
//         try {
//             const response = await fetch('http://localhost:5000/api/chatbot', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ query: userInput }),
//             });

//             const data = await response.json();

//             // Add bot response to chat history
//             newChatHistory.push({ sender: 'bot', text: data.response });
//             setChatHistory(newChatHistory);
//         } catch (error) {
//             console.error('Error:', error);
//             setChatHistory([...newChatHistory, { sender: 'bot', text: 'Sorry, something went wrong. Please try again.' }]);
//         }

//         // Clear input field
//         setUserInput('');
//     };

//     return (
//         <div className="chatbot-container">
//             <h2>Chatbot</h2>
//             <div className="chat-window">
//                 {chatHistory.map((chat, index) => (
//                     <div key={index} className={`chat-message ${chat.sender}`}>
//                         <strong>{chat.sender === 'user' ? 'You' : 'Bot'}:</strong> {chat.text}
//                     </div>
//                 ))}
//             </div>
//             <form onSubmit={handleSubmit} className="chat-input">
//                 <input
//                     type="text"
//                     value={userInput}
//                     onChange={handleInputChange}
//                     placeholder="Type your message..."
//                     required
//                 />
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//     );
// };

// export default Chatbot;

import React, { useState } from 'react';
import './Chatbot.css'; // Optional: You can create a CSS file for styling

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add user input to chat history
        const newChatHistory = [...chatHistory, { sender: 'user', text: userInput }];
        setChatHistory(newChatHistory);

        // Send user input to the backend
        try {
            const response = await fetch('http://localhost:5000/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: userInput }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Add bot response to chat history
            newChatHistory.push({ sender: 'bot', text: data.message });
            setChatHistory(newChatHistory);
        } catch (error) {
            console.error('Error:', error);
            setChatHistory([...newChatHistory, { sender: 'bot', text: 'Sorry, something went wrong. Please try again.' }]);
        }

        // Clear input field
        setUserInput('');
    };

    return (
        <div className="chatbot-container">
            <h2><center>VTS Chatbot</center></h2>
            <div className="chat-window">
                {chatHistory.map((chat, index) => (
                    <div key={index} className={`chat-message ${chat.sender}`}>
                        <strong>{chat.sender === 'user' ? 'You' : 'Bot'}:</strong> {chat.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="chat-input">
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
