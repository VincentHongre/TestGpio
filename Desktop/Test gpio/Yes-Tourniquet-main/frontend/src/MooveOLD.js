import "./App.css";


var passages = 0;
var ancien_état = 0;
var nouvel_état = 0;
var équivalences = "une boulangerie";

function Moove({lastMessage}) {
  const messageValue = lastMessage?.data?.replace(/["\\r]/g, "");
  const totalWattOfDay = (parseFloat(passages) * 0.09).toFixed(1);

  
  
  
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
        {(passages >= 5 && passages <= 10) && (
         <div>
          <span>
              Bravo ! Vous venez de générer assez d'énergie pour alimenter 
              <span style={{ fontWeight: "bold", color: "yellow" }}>
                {" "}
                {équivalences}
                <br />
                  <br />
              </span>
            </span>
          </div>
          )}
          
        
        
        
        {passages ? (
          <div>
            <span>
              Vous êtes la
              <span style={{ fontWeight: "bold", color: "green" }}>
                {" "}
                {passages}ème{" "}
              </span>
              personne de la journée <br />
              et vous vennez de générer{" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                0,09 Wh
              </span>
            </span>
            <br />
            <br />
            Total aujourd'hui :{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              {totalWattOfDay} Wh
            </span>{" "}
            <br />
            <br />
            <span
              style={{
                paddingTop: "2rem",
                fontWeight: "bold",
              }}
            >
              Merci !
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
