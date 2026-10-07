# Durate trascorse

Una durata ordinaria viene misurata in **tempo lavorativo**. Un'attività di tre giorni su un calendario dal lunedì al venerdì, otto ore al giorno, richiede 24 ore lavorative, e se inizia giovedì termina lunedì — il fine settimana non conta.

Una durata **trascorsa** viene misurata in **tempo di calendario**. Conta ininterrottamente, 24 ore al giorno, 7 giorni su 7, attraverso fine settimana, festività e ogni eccezione non lavorativa del [calendario](/it/setting-up-project/calendars/index.md).

Usala per tutto ciò a cui non importa se il tuo team è al lavoro: la stagionatura del calcestruzzo, l'asciugatura della vernice, un soak test, un periodo di attesa normativo o una spedizione in transito.

## Inserire una durata trascorsa

Digita la durata con una **`e`** prima dell'unità:

| Digiti | Ottieni |
|--------|---------|
| `3d` | 3 giorni lavorativi |
| `3ed` | 3 giorni trascorsi — 72 ore di calendario |
| `2ew` | 2 settimane trascorse — 14 giorni di calendario |
| `8eh` | 8 ore trascorse |

Le unità sono `min`, `h`, `d`, `w` e `m` — minuti, ore, giorni, settimane, mesi — e ognuna di esse accetta la `e`. Le abbreviazioni sono tradotte, quindi in un'interfaccia non in inglese usa le lettere delle unità di quella lingua; il marcatore `e` resta invariato.

Puoi anche usare la casella **Elapsed** invece di digitare, nell'editor della durata della finestra [Proprietà delle attività](/it/building-schedule/task-properties/index.md). Il suo suggerimento è la definizione stessa:

> Trascorsa. Se selezionata, la durata conta ininterrottamente (24/7) invece che solo durante l'orario di lavoro definito dal calendario.

Selezionare o deselezionare la casella mantiene il numero che vedi e ne cambia il significato: `3d` diventa `3ed`. Non converte silenziosamente 3 giorni lavorativi nel numero equivalente di giorni trascorsi.

## Quanto vale un'unità trascorsa

Le unità trascorse ignorano il calendario del progetto e usano un'aritmetica di calendario fissa:

| Unità | Valore trascorso |
|-------|------------------|
| 1 giorno trascorso | 24 ore |
| 1 settimana trascorsa | 7 giorni = 168 ore |
| 1 mese trascorso | 30 giorni = 720 ore |

Confrontale con le unità lavorative, che derivano dalle [Proprietà del progetto](/it/setting-up-project/project/index.md) — per impostazione predefinita 8 ore al giorno, 5 giorni a settimana, 20 giorni al mese. Quindi `1w` equivale a 40 ore lavorative, mentre `1ew` equivale a 168 ore di calendario.

## Ritardo trascorso su una dipendenza

La stessa idea si applica al ritardo di una [dipendenza](/it/building-schedule/dependencies/index.md), ed è qui che conta di più. "Inizia l'attività successiva tre giorni dopo la fine di questa" di solito significa tre giorni di *calendario*, non tre giorni lavorativi — altrimenti una fine di venerdì sposta il successore a mercoledì.

Nella scheda **Predecessors** di Task Properties, ogni collegamento ha la propria casella **Elapsed** accanto al ritardo, con lo stesso significato:

> Se selezionata, il ritardo conta ininterrottamente (24/7) invece che solo durante l'orario di lavoro definito dal calendario.

Puoi anche digitarlo direttamente: un ritardo di `3ed` corrisponde a tre giorni di calendario.

## Importazione ed esportazione

Le durate e i ritardi trascorsi fanno parte del formato Microsoft Project e sopravvivono a un ciclo di andata e ritorno in entrambe le direzioni. Una durata `3ed` importata da Microsoft Project resta `3ed` e viene riesportata come durata trascorsa.
