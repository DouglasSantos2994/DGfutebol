
import React, { useState, useEffect } from "react";
import Oitavas from "../../src/components/Oitavas";
import CopaFase3 from "../../src/components/CopaFase3";
import CopaFase2 from "../../src/components/CopaFase2";
import CopaFase1 from "../../src/components/CopaFase1";
export default function TabelaCsopa() {
  return (
    <div>
      <h1>Campeonato: Copa do Brasil</h1>
      <Oitavas />
      <CopaFase3 />
      <CopaFase2 />
      <CopaFase1 />
    </div>
  );
}
