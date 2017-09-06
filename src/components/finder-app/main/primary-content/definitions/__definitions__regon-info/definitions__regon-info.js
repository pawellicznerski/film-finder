import React, { Component } from 'react';

export class RegonInfo extends Component {
  render() {
    return (
      <div className="mainInfoText">
        <p>
          REGON (akronim od Rejestr Gospodarki Narodowej) – Krajowy Rejestr Urzędowy Podmiotów Gospodarki Narodowej – rejestr prowadzony przez Prezesa Głównego Urzędu Statystycznego. Pod pojęciem REGON-u rozumiany jest także numer identyfikacyjny REGON, czyli dziewięciocyfrowy numer podmiotu gospodarki narodowej w powyższym rejestrze.
          Rejestr REGON jest bieżąco aktualizowanym zbiorem informacji o podmiotach gospodarki narodowej prowadzonym w systemie informatycznym w postaci centralnej bazy danych oraz terenowych baz danych posadowionych w 16 urzędach statystycznych. CEIDG-2011 Wpisowi do rejestru REGON podlegają następujące podmioty:
          osoby prawne,
          jednostki organizacyjne nie mające osobowości prawnej,
          osoby fizyczne prowadzące działalność gospodarczą, w tym prowadzące indywidualne gospodarstwa rolne,
          jednostki lokalne ww. podmiotów.
          Osoby fizyczne mają numer REGON przypisany raz na zawsze, przy pierwszej rejestracji w rejestrze. Jeżeli po zlikwidowaniu działalności podejmą kiedykolwiek nową działalność (taką samą lub inną), ich 9-cyfrowy numer REGON pozostanie niezmieniony. algorytmem numer 000-000-00-00 jest prawidłowy, ale nie ma sensu. Dla ciągu cyfr 123-456-78-90 nie można dobrać cyfry kontrolnej, by wygenerować prawidłowy NIP.
        </p>
      </div>
    );
  }
}
