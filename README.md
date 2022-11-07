# Zad. 4

Twoim zadaniem będzie napisanie hook’a, który przyjmuje argumenty:
- `func` - funkcja, która wykona jakieś zadanie następnie zwraca promise
- `ms` - czas w milisekundach, po którym timeout zostanie osiągnięty

Hook powinien zwrócić funkcję, po wywołaniu tej funkcji otrzymujemy promise, który zwraca to, co funkcja z argumentu o ile zdążyła się ona wykonać w zadanym czasie (określonym przez parametr `ms`). Jeżeli nastąpił timeout (minęło więcej czasu niż określona wartość), promise powinien zostać odrzucony z odpowiednim komunikatem np. `Timeout exceeded.`

W katalogu znajdziesz również plik `hook.test.js`, który pomocny będzie w zweryfikowaniu poprawności Twojego rozwiązania.

Ocenione zostaną:
- prostota rozwiązania
- czytelność kodu