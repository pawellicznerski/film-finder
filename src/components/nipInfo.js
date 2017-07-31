import React, { Component } from 'react';

export class NipInfo extends Component {
  render() {
    return (
      <div className="mainInfoText">
        <p>
          Numer identyfikacji podatkowej (NIP) – dziesięciocyfrowy kod, służący do identyfikacji podatników w Polsce. Wprowadziła go ustawa z października 1995, a zaczął obowiązywać od 1996. Nadawany jest przez naczelnika urzędu skarbowego. Od 1 września 2011 roku osoby fizyczne nieprowadzące działalności gospodarczej używają numeru PESEL jako identyfikatora podatkowego[1].
          Prefiks - trzy pierwsze cyfry każdego NIP oznaczają kod urzędu skarbowego, który nadał dany numer. W kodzie tym początkowo występowały wyłącznie cyfry od 1 do 9. W roku 2004 wprowadzono kilkadziesiąt nowych urzędów skarbowych, uczyniono wyjątek od dotychczasowej reguły i dano nowym urzędom kody z zerem na drugiej pozycji. Tak więc np. kod 106 oznacza Małopolski Urząd Skarbowy w Krakowie - nadany przez niego NIP 106-00-00-062 jest prawidłowy. W przeszłości NIP zwyczajowo zapisywało się, oddzielając grupy cyfr łącznikiem. Dla osób fizycznych grupowano cyfry 123-456-78-19, a dla firm grupowano 123-45-67-819. Firma zakładana przez jedną osobę miała NIP tej osoby. Obecnie nadawany jest bez znaków łącznika. Dziesiąta cyfra NIP jest cyfrą kontrolną, obliczaną według poniższego algorytmu:
          Pomnożyć każdą z pierwszych dziewięciu cyfr odpowiednio przez wagi: 6, 5, 7, 2, 3, 4, 5, 6, 7.
          Zsumować wyniki mnożenia.
          Obliczyć resztę z dzielenia przez 11 (operacja modulo 11).
          NIP jest tak generowany, aby nigdy w wyniku tego dzielenia nie wyszła liczba 10. Zgodnie z tym algorytmem numer 000-000-00-00 jest prawidłowy, ale nie ma sensu. Dla ciągu cyfr 123-456-78-90 nie można dobrać cyfry kontrolnej, by wygenerować prawidłowy NIP.
        </p>
      </div>
    );
  }
}
