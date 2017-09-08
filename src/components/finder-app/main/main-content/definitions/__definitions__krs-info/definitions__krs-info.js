import React, { Component } from 'react';
import { Definition } from './../definitions';

export class KrsInfo extends Component {
  render() {
    return (
      <Definition>
        <h1>{location.pathname}</h1><br/>
          <strong>Krajowy Rejestr Sądowy (KRS)</strong> – rodzaj rejestru publicznego, prowadzony przez wybrane sądy rejonowe i Ministerstwo Sprawiedliwości.
          KRS działa od 1 stycznia 2001 roku na podstawie ustawy z dnia 20 sierpnia 1997 roku o Krajowym Rejestrze Sądowym[1]. Zastąpił istniejący poprzednio rejestr handlowy.W odróżnieniu od poprzedniego rejestru handlowego, którego poziom dostępności był ograniczony ze względów technicznych, Krajowy Rejestr Sądowy daje możliwość uzyskania informacji o każdym przedsiębiorcy podlegającemu obowiązkowi wpisu do KRS w formie odpisu, wyciągu lub odpowiedniego zaświadczenia w kilkudziesięciu ekspozyturach Centralnej Informacji Krajowego Rejestru Sądowego na terenie całego kraju. Od czerwca 2012 elektroniczne odpisy aktualne z KRS można pobrać bezpłatnie w Internecie.<br/><br/>
        Źródło: wikipedia.org/wiki/Krajowy_Rejestr_Sądowy<br/><br/>

      </Definition>
    );
  }
}
