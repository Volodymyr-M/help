# Condividere un progetto

Un progetto Ingantt archiviato in Google Drive può essere condiviso come qualsiasi altro file di Drive — con persone specifiche, con la tua organizzazione o con chiunque abbia il link. Sul web fai tutto questo dall'interno di Ingantt.

## Prima di iniziare

La condivisione funziona solo con i file di Google Drive. Devi aver effettuato l'accesso con Google e il progetto deve essere salvato su Drive; un progetto che si trova in un file locale sul tuo dispositivo non ha nulla da condividere. Vedi [Salvare il progetto](/it/getting-started/saving/index.md).

> Il pulsante **Condividi** fa parte di Ingantt per Web. Su Android, iOS, Windows e macOS, condividi invece il file da Google Drive — apri Drive, trova il file Ingantt e usa il comando **Condividi** di Drive. Il risultato è identico, perché in entrambi i casi le autorizzazioni risiedono sul file di Drive.

## Condividere con persone specifiche

1. Apri il progetto e fai clic su **Condividi** nell'intestazione, oppure scegli **Condividi** nel menu **File**. Si apre la finestra **Condividi su Google Drive**.
2. Sotto **Persone con accesso** vedi tutti quelli che hanno già accesso, con i proprietari per primi.
3. Fai clic su **Aggiungi**, inserisci l'indirizzo email della persona, scegli il ruolo che vuoi assegnarle e conferma.
4. Chiudi la finestra. Ingantt salva le nuove autorizzazioni su Drive e conferma con *Accesso aggiornato*.

I ruoli sono quelli di Google Drive:

| Ruolo | Cosa può fare |
|-------|---------------|
| **Visualizzatore** | Aprire il progetto e consultarlo. Non può salvare modifiche. |
| **Commentatore** | Come Viewer, più commentare il file in Google Drive. Non può salvare modifiche. |
| **Editore** | Aprire il progetto e salvarvi le modifiche. |
| **Proprietario** | Tutto, inclusi eliminare il file e trasferirne la proprietà. |

Per cambiare il ruolo di qualcuno, scegli un ruolo diverso accanto al suo nome. Per rimuoverlo, elimina la sua riga.

> Inserisci un indirizzo con cui la persona può effettivamente accedere a Google. Se Ingantt non riesce a confermare che l'indirizzo appartiene a Gmail o Google Workspace ti avvisa, perché una condivisione Drive verso un indirizzo senza un account Google dietro non permetterà a quella persona di aprire il progetto.

## Accesso generale — link e organizzazioni

**Accesso generale** controlla tutti quelli che non hai indicato singolarmente:

- **Limitato** — solo le persone elencate sotto **Persone con accesso**. È l'impostazione predefinita.
- **Chiunque con il link** — chiunque abbia il link, con il ruolo che scegli (Viewer, Commenter o Editor).
- **Dominio** — tutti i membri della tua organizzazione Google Workspace, con il ruolo che scegli. Questa opzione compare solo quando il proprietario del progetto appartiene a un dominio Workspace; non è offerta per gli account Gmail personali.

**Copia link** copia il link di Google Drive al progetto. Chiunque abbia l'accesso necessario può aprire quel link e modificare il piano in Ingantt.

Il suggerimento del pulsante **Condividi** ti dice lo stato corrente a colpo d'occhio — *Privato - Solo tu puoi accedere*, *Condiviso con persone specifiche*, *Chiunque con il link può visualizzare/commentare/modificare*, o l'equivalente per il tuo dominio.

## Chi può modificare l'accesso

Solo il **proprietario** del file può sempre gestire l'accesso. Anche un **editore** può gestire l'accesso, a meno che il proprietario non l'abbia disattivato in Google Drive.

Se apri la finestra su un progetto condiviso con te come visualizzatore o commentatore, mostra **Sei un visualizzatore e non puoi gestire l'accesso** e visualizza l'accesso generale corrente senza permetterti di modificarlo. Chiedi al proprietario se ti servono più permessi.

## Lavorare su un progetto condiviso

- Tutti aprono lo stesso file di Drive, ma Ingantt non è uno strumento di modifica collaborativa in tempo reale. Ogni salvataggio scrive l'intero file di progetto, quindi se due persone hanno il piano aperto ed entrambe salvano, vince l'ultimo salvataggio e le modifiche dell'altra persona vengono sostituite. Mettiti d'accordo su chi modifica prima di iniziare e controlla la cronologia delle versioni del file in Google Drive se pensi che qualcosa sia andato perso.
- Un visualizzatore o commentatore che prova a salvare vede **Sei un visualizzatore e non puoi salvare**. Usa invece **Salva file come** per conservare una copia personale.
- Ogni collaboratore ha bisogno del proprio abbonamento o della propria prova Ingantt attivi per modificare — condividere un piano non condivide il tuo abbonamento. Vedi [Abbonamenti e pagamento](/it/account/subscription/index.md).
- La condivisione con un indirizzo di **gruppo** Google non è supportata dalla finestra Condividi di Ingantt. Condividi con indirizzi individuali, oppure gestisci la condivisione con un gruppo da Google Drive.

## Argomenti correlati

- [Integrazione con Google Drive](/it/ui/files/index.md) — accesso, autorizzazioni e apertura di file condivisi.
- [Salvare il progetto](/it/getting-started/saving/index.md) — dove viene archiviato un progetto e quando viene salvato.
