import { useState, useEffect } from "react";
import "./App.css";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logo from "./logo.png";
import logoJunia from "./logo-junia.png";
import animation from "./animation.gif";
import Boulanger from "./Boulanger.gif";

import Moove from "./Moove";

var passages = 0;
var ancien_état = 0;
var nouvel_état = 0;

#include <wiringPi.h>
int main (void)
{
  wiringPiSetup () ;
  pinMode (5, OUTPUT) ;
  for (;;)
  {
    digitalWrite (0, HIGH) ; delay (500) ;
    digitalWrite (0,  LOW) ; delay (500) ;
  }
  return 0 ;
}


function App() {
  const [shouldDisplayMoove, setDisplayMoove] = useState(false);


    
  const { lastMessage, readyState } = useWebSocket("ws://127.0.0.1:8081", {
    share: true,
    shouldReconnect: (closeEvent) => true,
    onMessage: () => {
      setDisplayMoove(true);
    },
  });

  
  
  const connectionStatus = {
    [ReadyState.CONNECTING]: "connexion...",
    [ReadyState.OPEN]: "ok",
    [ReadyState.CLOSING]: "fermeture",
    [ReadyState.CLOSED]: "fermé",
    [ReadyState.UNINSTANTIATED]: "uninstantiated",
  }[readyState];

  
  
  const messageValue = lastMessage?.data?.replace(/["\\r]/g, "");
  
  if (messageValue == 1) {
    nouvel_état = 1;
  }
  
  if (messageValue == 0) {
    nouvel_état = 0;
  }
  
  if ((ancien_état == 0) && (nouvel_état == 1)) {
    passages = passages + 1;
    ancien_état = 1;
    // traitement sur front montant
    
  } else if ((ancien_état == 1) && (nouvel_état == 0)) {
    ancien_état = 0;
    // traitement sur front descendant
    
  }
  else if( (ancien_état == 0) && (nouvel_état == 0) )
  {
     // pas de changement d'état : front bas
  }
  else if( (ancien_état == 1) && (nouvel_état == 1) )
  {
     // pas de changement d'état : front haut
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="status">Status: {connectionStatus}</div>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <img
            src={logoJunia}
            alt="Logo-Junia"
            className="logo"
            style={{ paddingTop: "3rem" }}
          />
        
        </div>
        
        
        {(passages >= 0 && passages <=4) && (
          <img src={animation} alt="loading..." className="Animation" />
        )
        } 
        
        {(passages >= 5 && passages <=10) && (
          <img src={Boulanger} alt="loading..." className="Animation" />
        )
        } 
        
        
          
          
        <Moove lastMessage={lastMessage} />
      </header>
    </div>
  );
}

export default App;
