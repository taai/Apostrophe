Šis jQuery spraudnis padara iespējamu interneta lapās rakstīt latviski, ja datorā šādas iespējas nav.

Tas strādā tāpat, kā tad, kad ieinstalēts daudziem zināmais "Tildes birojs" - ar *apostrofa* taustiņu ('). Piemēram, nospiežot ```'``` un burtu ```a```, tiek ierakstīts burts ```ā``` un tā tālāk...

Izmantojiet šo spraudni, piemēram, lai lietotājiem sniegtu iespēju rakstīt latviski pat atrodoties ārzemēs!

## Demo

Mazliet plašāks apraksts un demo: [http://code.lidotajs.lv/apostrophe](http://code.lidotajs.lv/apostrophe)

## Kā izmantot

Lai aktivizētu spraudni konkrētam ievades laukam:

```js
$('#ievades_lauka_id').apostrophe();
```

Lai lai deaktivizētu spraudni konkrētam ievades laukam:

```js
$('#ievades_lauka_id').apostrophe(false);
```

Lai aktivizētu spraudni visiem lapā esošajiem ievades laukiem:

```js
$('textarea, input[type=text]').apostrophe();
```

Saderība: jQuery 1.2 vai jaunāks

Pārlūkprogrammas: Firefox, Safari, Chrome, Internet Explorer 6+, Opera

Licence: MIT un GPL - par brīvu!
