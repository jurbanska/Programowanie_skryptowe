function wypisz(){
    let tekstowe = document.forms[0].elements[0].value
    let liczbowe = document.forms[0].elements[1].value

   alert('pole tekstowe: ' + tekstowe + '; typ danych: ' + typeof tekstowe)
   alert('pole liczbowe: ' + liczbowe + '; typ danych: ' + typeof liczbowe)
}