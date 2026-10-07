# Codici WBS

Ogni attività ha un codice **WBS** — il suo indirizzo nella struttura. Per impostazione predefinita è il semplice numero di struttura: `1`, `1.1`, `1.2`, `1.2.1`. Per visualizzarlo, attiva la colonna **WBS** nella tabella delle attività.

Una **maschera del codice WBS** sostituisce quei numeri di struttura con un codice strutturato di tua progettazione, così le attività risultano come `PROJ-A-01` o `1.A.001` invece di `1.1.1`. Le organizzazioni con uno standard di numerazione — un contratto, uno schema di codici di costo, il formato di reportistica di un cliente — lo usano per far corrispondere i codici di Ingantt a quello standard.

Apri **Progetto → Definizione Codice WBS** per configurarne una.

## I codici WBS e i codici struttura sono diversi

- Un **codice WBS** è strutturale. Ce n'è esattamente uno per attività e deriva dalla posizione dell'attività nella struttura. Si rinumera da solo quando sposti le attività.
- Un **[codice struttura](/it/adjusting-schedule/custom-fields/index.md)** è un'etichetta. Definisci un elenco di valori — reparto, fase, centro di costo — e assegni i valori alle attività indipendentemente dalla gerarchia. Un'attività può averne diversi, da diversi codici struttura.

## Definire la maschera

La finestra ha tre parti.

### Prefisso Codice Progetto

Testo fisso anteposto a ogni codice del progetto. Con il prefisso `PROJ`, i codici risultano come `PROJ.1.1` o `PROJ-A-01` a seconda dei separatori. Lascialo vuoto per non avere alcun prefisso.

### Maschera del codice

Una riga per ogni livello della struttura, aggiunta con **Aggiungi Livello**. Ogni riga imposta:

| Campo | Cosa fa |
|-------|---------|
| **Livello** | La profondità della struttura a cui si applica la riga. Il livello 1 corrisponde alle attività di primo livello, il livello 2 alle loro sottoattività, e così via. |
| **Sequenza** | I caratteri usati a questo livello: **Numeri** (1, 2, 3), **Lettere Maiuscole** (A, B, C … Z, AA), **Lettere Minuscole** (a, b, c … z, aa) o **Caratteri**. |
| **Lunghezza** | Numero massimo di caratteri a questo livello. Lascialo vuoto — mostra *Qualsiasi* — per nessun limite. |
| **Separatore** | Il carattere tra questo livello e il successivo, ad esempio `.` o `-`. |

Due cose sono utili da sapere sul comportamento dei campi:

- **La lunghezza completa i numeri con zeri iniziali.** Una lunghezza di `3` su un livello Numbers trasforma la nona attività in `009`. Non completa i livelli con lettere.
- **Caratteri** si comporta come Numbers per i codici generati da Ingantt. Esiste per compatibilità con Microsoft Project, dove indica un livello che digiti tu stesso.

Non devi definire ogni livello. **I livelli più profondi dell'ultima riga della maschera tornano a un numero con separatore `.`**, quindi una maschera di tre righe su un piano a cinque livelli produce comunque un codice completo.

### Opzioni

**Genera codice WBS per nuove attivita** e **Verifica unicita dei nuovi codici WBS** vengono memorizzati con il progetto e preservati in un ciclo di andata e ritorno con Microsoft Project. In Ingantt, una maschera con almeno un livello viene applicata automaticamente a ogni attività, e i codici sono unici per costruzione perché seguono la struttura.

## Cosa succede quando salvi la maschera

Ingantt rinumera immediatamente l'intero progetto. I codici vengono ricostruiti dalla struttura ogni volta che questa cambia — quando aggiungi, elimini, rientri, riduci il rientro o sposti un'attività — così descrivono sempre dove si trova l'attività in quel momento.

Vale la pena dirlo chiaramente: **un codice WBS non è un identificatore permanente di un'attività.** Sposta un'attività e il suo codice cambia. Se ti serve un'etichetta che segua l'attività, usa invece un codice struttura o un [campo di testo personalizzato](/it/adjusting-schedule/custom-fields/index.md).

## Importazione ed esportazione

La maschera fa parte del formato Microsoft Project e sopravvive a un ciclo di andata e ritorno. Un progetto importato con una maschera la conserva, la esporta, e i codici delle sue attività corrispondono a quelli prodotti da Microsoft Project.
