import React, { Component } from 'react';
import { Definition } from './../definitions';

export class NipInfo extends Component {
  render() {
    return (
      <Definition>
          <h1>{location.pathname}</h1><br/>
        <strong>Numer identyfikacji podatkowej (NIP)</strong> – dziesięciocyfrowy kod, służący do identyfikacji podatników w Polsce. Wprowadziła go ustawa z października 1995, a zaczął obowiązywać od 1996. Nadawany jest przez naczelnika urzędu skarbowego. Od 1 września 2011 roku osoby fizyczne nieprowadzące działalności gospodarczej używają numeru PESEL jako identyfikatora podatkowego[1].<br/><br/>
        <strong>Prefiks</strong> - trzy pierwsze cyfry każdego NIP oznaczają kod urzędu skarbowego, który nadał dany numer. W kodzie tym początkowo występowały wyłącznie cyfry od 1 do 9. W roku 2004 wprowadzono kilkadziesiąt nowych urzędów skarbowych, uczyniono wyjątek od dotychczasowej reguły i dano nowym urzędom kody z zerem na drugiej pozycji. Tak więc np. kod 106 oznacza Małopolski Urząd Skarbowy w Krakowie - nadany przez niego NIP 106-00-00-062 jest prawidłowy.<br/><br/>
        Źródło: wikipedia.org/wiki/NIP <br/><br/>
      </Definition>
    );
  }
}
