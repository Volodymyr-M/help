# Vincoli

Alcune attività devono iniziare o finire in date specifiche — una consegna arriva martedì, un permesso scade venerdì. I vincoli ti permettono di bloccare le date dove necessario mantenendo il resto del cronogramma flessibile.

## Come funzionano i vincoli

Insieme alle dipendenze tra attività (collegamenti tra predecessori), il vincolo di un'attività definisce come l'attività viene pianificata.

I vincoli vengono impostati nella scheda **Advanced** della finestra **Task Properties**. Il vincolo predefinito è **As soon as possible**. Questo significa che l'attività viene posizionata il più vicino possibile alla data di inizio del progetto, nel rispetto delle dipendenze con le altre attività. Nei progetti pianificati dalla data di fine, il vincolo predefinito è invece **As late as possible**.

Esistono due vincoli che forzano l'attività a iniziare o finire alla data specificata indipendentemente dalle dipendenze. Questi vincoli sono chiamati _vincoli inflessibili_ e sono **Must start on** e **Must finish on**. Usa questi vincoli solo se sei certo che siano necessari.

Gli altri vincoli (**Start no earlier than**, **Start no later than**, **Finish no earlier than** e **Finish no later than**) sono chiamati _flessibili_, poiché rispettano le dipendenze tra attività. Se le dipendenze spingono l'attività oltre la data del vincolo, la data determinata dalla dipendenza ha la priorità.

| Vincolo                    | Descrizione                                                                                                                                   |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| **As soon as possible**    | L'attività viene pianificata non appena i predecessori lo consentono. Se non ci sono predecessori collegati, l'attività inizia all'inizio dell'attività di riepilogo genitore. |
| **As late as possible**    | L'attività viene pianificata il più tardi possibile rispetto ai predecessori. Se non ci sono predecessori collegati, l'attività termina alla fine dell'attività di riepilogo genitore.    |
| **Start no earlier than**  | Se l'attività inizia dopo la data specificata a causa dei predecessori, non cambia nulla. Altrimenti, l'attività viene pianificata per iniziare alla data specificata. |
| **Start no later than**    | Se i predecessori spingono l'attività oltre la data del vincolo, la data determinata dalla dipendenza ha la priorità. Altrimenti, l'attività viene pianificata per iniziare entro la data specificata. |
| **Finish no earlier than** | Se l'attività termina dopo la data specificata a causa dei predecessori, non cambia nulla. Altrimenti, l'attività viene pianificata per terminare alla data specificata.|
| **Finish no later than**   | Se i predecessori spingono l'attività oltre la data del vincolo, la data determinata dalla dipendenza ha la priorità. Altrimenti, l'attività viene pianificata per terminare entro la data specificata. |
| **Must start on**          | La data di inizio dell'attività viene pianificata esattamente come specificato, indipendentemente dai predecessori.                                                   |
| **Must finish on**         | La data di fine dell'attività viene pianificata esattamente come specificato, indipendentemente dai predecessori.                                                  |

Le attività con un vincolo flessibile o inflessibile mostrano un'icona speciale nell'elenco delle attività.

> Mantieni la maggior parte delle attività impostate su **As soon as possible** e usa i vincoli flessibili solo per le attività che devono iniziare o finire vicino a una data specifica.
