Šis jQuery spraudnis padara iespējamu interneta lapās rakstīt latviski, ja datorā šādas iespējas nav.

Tas strādā tāpat, kā tad, kad ieinstalēts daudziem zināmais "Tildes birojs" - ar *apostrofa* taustiņu ('). Piemēram, nospiežot ```'``` un burtu ```a```, tiek ierakstīts burts ```ā``` un tā tālāk...

Izmantojiet šo spraudni, piemēram, lai lietotājiem sniegtu iespēju rakstīt latviski pat atrodoties ārzemēs!

## Kā izmantot

Lai aktivizētu spraudni konkrētam ievades laukam:

```js
$('#elementa_id').apostrophe();
```

Lai aktivizētu spraudni visiem lapā esošajiem ievades laukiem:

```js
$('textarea, input[type=text]').apostrophe();
```