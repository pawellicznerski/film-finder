import React, { Component } from 'react';
import { Definition } from './../definitions';

export class RegonInfo extends Component {
  render() {
    return (
      <Definition>
        <h1>{location.pathname}</h1><br/>
          <strong>REGON (akronim od Rejestr Gospodarki Narodowej) – Krajowy Rejestr Urzędowy Podmiotów Gospodarki Narodowej</strong> – rejestr prowadzony przez Prezesa Głównego Urzędu Statystycznego. Pod pojęciem REGON-u rozumiany jest także numer identyfikacyjny REGON, czyli dziewięciocyfrowy numer podmiotu gospodarki narodowej w powyższym rejestrze.<br/><br/>
          Rejestr REGON jest bieżąco aktualizowanym zbiorem informacji o podmiotach gospodarki narodowej prowadzonym w systemie informatycznym w postaci centralnej bazy danych oraz terenowych baz danych posadowionych w 16 urzędach statystycznych. CEIDG-2011 Wpisowi do rejestru REGON podlegają następujące podmioty:
          osoby prawne,
          jednostki organizacyjne nie mające osobowości prawnej,
          osoby fizyczne prowadzące działalność gospodarczą, w tym prowadzące indywidualne gospodarstwa rolne,
          jednostki lokalne ww. podmiotów.<br/><br/>
        Źródło: wikipedia.org/wiki/REGON<br/><br/>
      </Definition>
    );
  }
}
