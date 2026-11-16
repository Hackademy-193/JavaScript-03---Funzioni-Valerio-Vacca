FUNZIONI
Una funzione è un blocco di istruzioni che scriviamo una sola volta e possiamo richiamare tutte le volte che vogliamo, sostituendo i dati al suo interno.

Le funzioni devono essere sempre generiche in fase di dichiarazione (creazione);

come dichiaro una funzione? con la keyword function

FASE DI CREAZIONE
function nomeFunzione(parametri generici){
    blocco di istruzioni -> cosa deve fare questa funzione
}

quanti parametri generici può avere una funzione, nelle tonde, in fase di creazione? da 1 parametro ad N parametri, anche 0

inoltre una funzione deve fare solamente quello per il quale è stata creata.
se nel mio esempio voglio avere il risultato di una addizione, quella funzione avrà solo quello scopo.
Se voglio fare una sottrazione, ne andrò a creare un'altra di funzione

Quanti output può avere una funzione? Sempre e solo uno che esegue.
Potremmo eventualmente avere delle condizioni nella funzione, come un if/else ma l'output sarà sempre ed esclusivamente uno! O l'output dell'if, o l'output dell'else, quindi uno!

Tutti i parametri generici che indico nelle tonde della funzione in fase di dichiarazione DEVONO ESSERE SFRUTTATI NEL CORPO DELLA FUNZIONE!

FASE DI INVOCAZIONE
Come si invoca una funzione? -> la si chiama

nomeDellaFunzione(passo i parametri reali);

SCOPE -> spazio di esecuzione:
1. Scope Locale
2. Scope Globale


Nel corpo di una funzione, per ritornare un valore fuori (e quindi dallo scope locale a quello globale) devo usare la keyword return!

tutto quello che c'è dopo un return, non esiste!