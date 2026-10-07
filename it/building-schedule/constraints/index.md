# Vincoli

Alcune attività devono iniziare o finire in date specifiche — una consegna arriva martedì, un permesso scade venerdì. I vincoli ti permettono di bloccare le date dove necessario mantenendo il resto del cronogramma flessibile.

## Come funzionano i vincoli

Insieme alle dipendenze tra attività (collegamenti ai predecessori), il vincolo di un'attività definisce come l'attività viene pianificata.

I vincoli vengono impostati nella scheda **Avanzato** della finestra **Proprietà del Compito**. Il vincolo predefinito è **Il prima possibile**. Questo significa che l'attività viene posizionata il più vicino possibile alla data di inizio del progetto, nel rispetto delle dipendenze con le altre attività. Nei progetti pianificati dalla data di fine, il vincolo predefinito è invece **Il più tardi possibile**.

Esistono due vincoli che forzano l'attività a iniziare o finire alla data specificata indipendentemente dalle dipendenze. Questi vincoli sono chiamati _vincoli inflessibili_ e sono **Deve iniziare il** e **Deve finire il**. Usa questi vincoli solo se sei certo che siano necessari.

Gli altri vincoli (**Inizio non prima di**, **Inizio non dopo**, **Fine non prima di** e **Fine non dopo**) sono chiamati _flessibili_, poiché rispettano le dipendenze tra attività. Se le dipendenze spingono l'attività oltre la data del vincolo, la data determinata dalla dipendenza ha la priorità.

| Vincolo                    | Descrizione                                                                                                                                   |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| **Il prima possibile**    | L'attività viene pianificata non appena i predecessori lo consentono. Se non ci sono predecessori collegati, l'attività inizia all'inizio dell'attività di riepilogo genitore. |
| **Il più tardi possibile**    | L'attività viene pianificata il più tardi possibile consentito dai predecessori. Se non ci sono predecessori collegati, l'attività termina alla fine dell'attività di riepilogo genitore. |
| **Inizio non prima di**  | Se l'attività inizia dopo la data specificata a causa dei predecessori, non cambia nulla. Altrimenti, l'attività viene pianificata per iniziare alla data specificata. |
| **Inizio non dopo**    | Se i predecessori spingono l'attività oltre la data del vincolo, la data determinata dalla dipendenza ha la priorità. Altrimenti, l'attività viene pianificata per iniziare entro la data specificata. |
| **Fine non prima di** | Se l'attività termina dopo la data specificata a causa dei predecessori, non cambia nulla. Altrimenti, l'attività viene pianificata per terminare alla data specificata.|
| **Fine non dopo**   | Se i predecessori spingono l'attività oltre la data del vincolo, la data determinata dalla dipendenza ha la priorità. Altrimenti, l'attività viene pianificata per terminare entro la data specificata. |
| **Deve iniziare il**          | La data di inizio dell'attività viene pianificata esattamente come specificato, indipendentemente dai predecessori.                                                   |
| **Deve finire il**         | La data di fine dell'attività viene pianificata esattamente come specificato, indipendentemente dai predecessori.                                                  |

Le attività con un vincolo flessibile o inflessibile mostrano un'icona speciale nell'elenco delle attività.

> Mantieni la maggior parte delle attività impostate su **Il prima possibile** e usa i vincoli flessibili solo per le attività che devono iniziare o finire vicino a una data specifica.
