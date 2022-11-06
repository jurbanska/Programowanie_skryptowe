print('Ładowanie modułu "{0}"'.format(__name__))
############################################
def wypisz():
    print('Wywołano funkcję "wypisz()" modułu "{0}"'.format(__name__))
############################################
print('Załadowano moduł "{0}"'.format(__name__))

'''
import lista
    Ładowanie modułu "lista"
    Załadowano moduł "lista"
import lista
import slownik
    Ładowanie modułu "slownik"
    Załadowano moduł "slownik"
import slownik
lista.wypisz()
    Wywołano funkcję "wypisz()" modułu "lista"
slownik.wypisz()
    Wywołano funkcję "wypisz()" modułu "slownik"
'''