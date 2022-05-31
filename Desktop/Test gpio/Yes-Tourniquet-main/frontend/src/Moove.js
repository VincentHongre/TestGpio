import React, { useEffect, useState } from 'react';
import "./App.css";
import Video1 from "./Vidéo1.gif"

var passages = 5;

var équivalences = "une boulangerie";


function Moove({socket}) {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const messageListener = (message) => {
      console.log("message", message);
      setMessages((prevMessages) => {
        console.log("prev", prevMessages);
        const newMessages = {...prevMessages};
        newMessages[message.id] = message;
        passages = Object.keys(message).map(function(key){ return message[key];}).reduce((a, b) => a + b);
        return newMessages;
      });
    };
  
    socket.on('passages', messageListener);

    return () => {
      socket.off('passages', messageListener);
    };
  }, [socket]);





  var lastMessage = {data: "xxx"}

  const messageValue = lastMessage?.data?.replace(/["\\r]/g, "");
  const totalWattOfDay = (parseFloat(passages) * 0.09).toFixed(1);


    
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "5vmin",
        pointerEvents: "none",
        outline: "none",
        color: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
          
        
        
        
        {passages ? (
          <div>
          <br />
          
            <span>
              
              
              <span style={{ fontWeight: "bold", color: "orange" }}>
                {" "}
                {passages} tours{" "}
              </span>
              
              
              
            
            
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              
            </span>
          </div>
        ) : (
          <span>Personne n'est encore passé aujourd'hui</span>
        )}
        
      </div>
    </div>
  );
}

export default Moove;
