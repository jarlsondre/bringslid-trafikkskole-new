import React from "react";
import "./home.css";
import TeslaImage from "../../images/yvonne_og_tesla.jpg";

function HomePage() {
  return (
    <div>
      <div className="card-container">
        <h2>Informasjon om oss</h2>
        <img src={TeslaImage}></img>
        Hei og velkommen til Bringslid Trafikkskole. Vi er en trafikkskole som
        holder til i HTL-bygget i Elnesvågen. Trafikkskolen drives av Yvonne
        Bringslid som har vært kjørelærer i over 30 år. Vi tilbyr
        konkurransedyktige priser og opplæring av høyeste kvalitet. For å
        bestille time, kontakt Yvonne på 91 51 40 04 eller på
        yvonne@bringslidtrafikkskole.no
      </div>
    </div>
  );
}

export default HomePage;
