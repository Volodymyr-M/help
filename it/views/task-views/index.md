# Viste attività

Oltre al diagramma di Gantt, visualizza le attività su una bacheca Kanban, un calendario mensile, un diagramma reticolare o una linea temporale. Ogni vista evidenzia aspetti diversi del cronogramma.

## Task Board

La vista **Task Board** mostra le attività come schede organizzate in colonne che rappresentano le fasi del flusso di lavoro (stile Kanban).

I nuovi progetti iniziano con tre colonne predefinite: "Not Started" (0%), "In Progress" (50%) e "Complete" (100%). Ogni colonna ha una corrispondenza con la % di completamento — quando trascini una scheda in una colonna, la percentuale di completamento dell'attività viene aggiornata automaticamente.

Puoi aggiungere, modificare, rinominare, riordinare ed eliminare le colonne. Ogni colonna ha un pulsante **Add Task** in fondo per creare attività direttamente in quella fase.

Solo le attività non di riepilogo, attive e con "Show on board" abilitato appaiono nella bacheca. L'impostazione "Show on board" è disponibile nella scheda **Visual** della finestra **Task Properties**.

> Trascina le schede delle attività tra le colonne per cambiarne lo stato. Quando la % di completamento di un'attività cambia altrove (tramite finestra di dialogo, modifica in linea o Update Project), la scheda si sposta automaticamente nella colonna corrispondente.

## Network Diagram

La vista **Network Diagram** mostra le attività come nodi rettangolari disposti in un layout a diagramma di flusso da sinistra a destra. Le attività senza predecessori appaiono nella colonna più a sinistra, e ogni attività successiva appare dopo tutti i suoi predecessori.

- Le attività normali mostrano ID, durata, date di inizio/fine e risorse
- Le attività di riepilogo mostrano ID, durata, date di inizio/fine e percentuale di completamento
- Le milestone mostrano ID e data di inizio
- Le attività del percorso critico hanno intestazioni e bordi rossi
- L'avanzamento è indicato da sovrapposizioni di linee diagonali: una linea per le attività in corso, linee incrociate per le attività completate

Puoi comprimere/espandere le attività di riepilogo, fare clic per selezionare, doppio clic per modificare e clic destro per il menu contestuale. Le frecce delle dipendenze vengono disegnate tra i nodi per tutti e quattro i tipi di collegamento.

## Calendar View

La **Calendar View** mostra una griglia calendario mensile con le attività visualizzate come barre orizzontali che coprono le date pianificate.

- Passa tra le viste **Month** e **Week** usando il pulsante nell'intestazione
- Abilita la modalità **Work week** per mostrare solo i giorni lavorativi (vista a 5 giorni)
- Naviga con i pulsanti Precedente/Successivo o vai direttamente a oggi
- I giorni non lavorativi sono mostrati con uno sfondo distinto
- Le milestone appaiono come icone a forma di diamante
- Fai doppio clic su un giorno vuoto per creare una nuova attività di 1 giorno in quella data

Le attività che superano il confine di una settimana proseguono nella riga successiva. Quando più attività si sovrappongono nello stesso giorno, si impilano verticalmente.

## Timeline

La **Timeline** è un pannello comprimibile che appare sopra il diagramma di Gantt, mostrando una panoramica semplificata delle attività selezionate dall'utente su un asse temporale orizzontale.

Per aggiungere un'attività alla timeline, fai clic destro su di essa e scegli **Display on Timeline**, oppure seleziona l'opzione nella scheda **Visual** della finestra Task Properties.

Le attività sulla timeline possono essere visualizzate come barre o didascalie (etichette di testo con linee di collegamento verticali). Puoi passare da una modalità all'altra trascinando la barra di un'attività sopra o sotto la linea separatrice orizzontale nel pannello della timeline. La timeline mostra anche un indicatore della data odierna e una sovrapposizione della finestra di visualizzazione che puoi trascinare per scorrere il diagramma di Gantt.

Attiva la Timeline dal menu **View**.

## Tracking Gantt

La vista **Tracking Gantt** è simile alla vista Tasks standard, ma con l'evidenziazione del percorso critico sempre attiva e la Baseline 0 mostrata se è stata salvata. Quando navighi fuori dal Tracking Gantt, le impostazioni di visibilità del percorso critico e della baseline vengono ripristinate allo stato precedente.

Usa il Tracking Gantt per monitorare l'avanzamento del progetto rispetto al piano di baseline.
