# Assegnazioni

Controlla come le risorse vengono allocate alle attività — chi lavora su cosa, per quanta parte del suo tempo e come è distribuito lo sforzo. Regola unità, profili di lavoro e straordinari in base a come il tuo team lavora effettivamente.

## Assegnazioni delle risorse e unità

Le risorse possono essere assegnate a un'attività nella scheda **Risorse** della finestra **Proprietà del Compito**.

Per assegnare una risorsa, seleziona la casella di controllo nella riga della risorsa. Per rimuovere l'assegnazione di una risorsa, deseleziona la casella.

Le assegnazioni di risorse di tipo lavoro o materiale hanno delle **Unità**, mostrate nella colonna corrispondente. Fai clic sul pulsante **Modifica** per modificare il valore predefinito delle **Unità** per l'assegnazione.

Per impostazione predefinita, le risorse di tipo lavoro vengono assegnate con unità corrispondenti alle [unità massime](/it/building-schedule/resources/index.md#unità-massime) della risorsa (100% per una risorsa a tempo pieno). Questo significa che la risorsa dedicherà tutto il suo tempo di calendario disponibile all'attività. Puoi modificare il valore con qualsiasi numero.

Per impostazione predefinita, le risorse di tipo materiale vengono assegnate con 1 unità. Questo significa che 1 unità di quel materiale verrà utilizzata per completare l'attività. L'unità rappresenta qualsiasi cosa tu abbia definito per il materiale (scatola, gallone, tonnellata, ecc.). Puoi modificare il valore predefinito e impostare qualsiasi numero di unità.

## Profili di lavoro

Quando una risorsa di tipo lavoro viene assegnata a un'attività, lo sforzo (lavoro) viene distribuito lungo la durata dell'attività secondo un **profilo lavoro**. Per impostazione predefinita, il lavoro è distribuito uniformemente (profilo Flat), ma Ingantt supporta diversi schemi di profilo che modificano la distribuzione dello sforzo nel tempo:

| Profilo | Descrizione |
|---------|-------------|
| **Uniforme** | Sforzo uniforme per tutta la durata (predefinito) |
| **Carico finale** | Lo sforzo aumenta verso la fine dell'attività |
| **Carico iniziale** | Lo sforzo è maggiore all'inizio e diminuisce |
| **Doppio picco** | Due picchi di intensità durante l'attività |
| **Picco iniziale** | Picco anticipato, poi calo graduale |
| **Picco finale** | Crescita fino a un picco verso la fine |
| **Campana** | Curva a campana — picco al centro |
| **Tartaruga** | Curva a campana più piatta — distribuzione più uniforme |
| **Personalizzato** | La tua distribuzione giornaliera personalizzata. Viene impostata automaticamente quando modifichi il lavoro in una vista di utilizzo; non può essere scelta dal menu a discesa. |

I profili di lavoro influenzano il modo in cui il lavoro viene distribuito nei periodi temporali e vengono conservati durante l'apertura e il salvataggio dei file di progetto.

### Il profilo Contoured

**Personalizzato** è il profilo personalizzato e si comporta diversamente dagli altri otto. Non puoi sceglierlo dal menu a discesa su un'assegnazione che non lo ha già — l'opzione è disattivata. Lo ottieni **modificando direttamente il lavoro in una cella di [Utilizzo delle Risorse o Utilizzo delle Attività](/it/views/resource-views/index.md)**: nel momento in cui digiti un valore di lavoro giornaliero, il profilo di quell'assegnazione diventa *Personalizzato* e viene usata la distribuzione che hai digitato.

Due conseguenze sono utili da sapere:

- **Passare da Contoured a un altro profilo elimina la distribuzione inserita a mano.** Scegli uno qualsiasi degli altri otto profili e i valori giornalieri che hai digitato vengono cancellati. Non vengono conservati né ripristinati se torni indietro.
- **Il lavoro Contoured sopravvive al ciclo di andata e ritorno con il formato Microsoft Project.** L'importazione legge il lavoro giornaliero distribuito nel tempo nell'assegnazione e l'esportazione lo riscrive. Un piano che arriva da Microsoft Project con un profilo modificato a mano lo conserva.

## Ritardo dell'assegnazione

Ogni assegnazione di risorsa su un'attività ha una proprietà **Ritardo** che posticipa il momento in cui la risorsa inizia a lavorare rispetto alla data di inizio dell'attività. Ad esempio, se un'attività inizia lunedì e una risorsa ha un ritardo di 2 giorni, quella risorsa inizia a lavorare mercoledì.

Il ritardo viene impostato nella finestra **Modifica Assegnazione delle Risorse** e si applica solo alle assegnazioni di risorse di tipo lavoro. Può essere utilizzato per scaglionare i tempi di inizio delle risorse su un'attività.

## Lavoro Straordinario

Per le risorse di tipo lavoro, puoi designare una parte del lavoro totale di un'assegnazione come straordinario. Il lavoro straordinario è un sottoinsieme del lavoro totale, non un'aggiunta: **Work = Regular Work + Overtime Work**.

L'impatto degli straordinari sui costi è trattato in [Configurazione dei costi](/it/planning-costs/setting-up-costs/index.md#costo-della-risorsa-di-tipo-lavoro).

Per le attività di tipo Fixed Units e Fixed Work, l'inserimento del lavoro straordinario riduce la durata dell'attività perché la durata si basa solo sul lavoro regolare.

Imposta il lavoro straordinario nella finestra **Modifica Assegnazione delle Risorse**. Tre colonne opzionali sono disponibili nella tabella delle attività: **Lavoro Straordinario**, **Costo Straordinario** e **Lavoro Regolare**.
