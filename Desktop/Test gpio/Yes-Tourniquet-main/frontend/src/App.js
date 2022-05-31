import { useState, useEffect } from "react";
import "./App.css";
import io from "socket.io-client";
import logo from "./logo.png";
import logoJunia from "./logo-junia.png";
import animation from "./animation.gif";
import Boulanger from "./Boulanger.gif";
import Video1 from "./Vidéo1.gif"
import Moove from "./Moove";
const ENDPOINT = "ws://localhost:8081";

var passages = 5;

function App() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
  
  
    <div className="App">
    
    {(passages >= 5 && passages <=10) && (
          <img src={Video1} alt="loading..." className="Animation" />
        )
        }
        
        
      <header className="App-header">
        <div className="status"></div>
        <div className="logo-container">
          
          
        </div>
        
         
        
        { socket ? (
        <Moove socket={socket} />
        ) : (
        <div>Not Connected</div>
        )}
      </header>
    </div>
  );
}

export default App;

