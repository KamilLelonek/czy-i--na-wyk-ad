# czy-iść-na-wykład

Algorytm decyzyjny pomagający zdecydować studentowi czy danego dnia należy pójść na wykład.

## Wymagania wstępne

Sklonuj repozytorium za pomocą komendy:

    git clone https://github.com/KamilLelonek/czy-i--na-wyk-ad.git

Wszystkie komendy należy wykonywać z poziomu linii poleceń w którym komenda `pwd` wskazuje na katalog projektu.

## Setup

Upewnij się, że posiadasz zainstalowane środowisko [`NodeJS`](https://nodejs.org/en/download/) za pomocą komendy:

    npm --version

W celu instalacji wszystkich zależności należy użyć:

    npm i

## Development

Wykonaj polecenie:

    npm run watch

aby uruchomić kompilacje `EcmaScript 6` za pomocą `Babel`a.

Następnie, aby uruchomić serwer developerski wykonaj w osobnym oknie terminala:

    npm run dev-server

i odwiedź [http://127.0.0.1:8080](http://127.0.0.1:8080). Wszystkie Twoje zmiany będą widoczne na bieżąco.

## Produkcja

Aby uruchomić aplikację w trybie produkcyjnym, należy posłużyć się komendą:

    npm start

W tym przypadku podgląd będzie dostępny pod adresem [http://localhost:8000/](http://localhost:8000/), a wszystkie zmiany pojawią się dopiero po odświeżeniu strony.

## Deployment

Aby hostować aplikację na własnym serwerze `Heroku` należy kliknąć na poniższy przycisk:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
