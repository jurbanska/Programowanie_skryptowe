import sys


##################################
def methodBody(self, name):
    return "Wywołano metodę \033[{color}m{name:^17}\033[0m obiektu \033[{color}m{objectId}\033[0m".format(
        name=name,
        color="38:5:{}".format(id(self) % 13 + 1),
        objectId=id(self)
    )


##################################
class Klasa(object):
    tab = [1, 2, 3]

    def __init__(self, val, x1, x2):
        print(methodBody(self, sys._getframe().f_code.co_name))
        self.tab = val
        self._zmienna1 = x1
        self.__zmienna2 = x2

    def __del__(self):
        print(methodBody(self, sys._getframe().f_code.co_name))

    def __str__(self):
        return methodBody(self, sys._getframe().f_code.co_name)

    def __repr__(self):
        return methodBody(self, sys._getframe().f_code.co_name)

    def metodaInstancyjna(self):
        print(methodBody(self, sys._getframe().f_code.co_name))
        print("Zmienna klasowa: ", Klasa.tab)
        print("Zmienna instancyjna", self.tab)

    @classmethod
    def metodaKlasowa(cls):
        print("Wywołano metodę \033[1m{name:^17}\033[0m klasy   \033[1m{cls}\033[0m".format(
            name=sys._getframe().f_code.co_name,
            cls=cls.__name__)
        )

    @staticmethod
    def metodaStatyczna():
        print("Wywołano metodę \033[1m{name:^17}\033[0m klasy   \033[1m{cls}\033[0m".format(
            name=sys._getframe().f_code.co_name,
            cls=__class__.__name__)
        )


##################################
print("Załadowano zawartość pliku '{name}'".format(name=__file__))

'''
Zad. 4
(venv) [jurbanska@fedora Klasy_i_obiekty]$ python3 -i klasa.py
Załadowano zawartość pliku '/home/jurbanska/PycharmProjects/Klasy_i_obiekty/klasa.py'
>>> obiekt = Klasa()
Wywołano metodę ::    __init__      obiektu ::140283231709232
>>> obiekt = None
Wywołano metodę ::     __del__      obiektu ::140283231709232
>>> obiekt = Klasa()
Wywołano metodę ::    __init__      obiektu ::140283231708608
>>> obiekt = Klasa()
Wywołano metodę ::    __init__      obiektu ::140283231706064
Wywołano metodę ::     __del__      obiektu ::140283231708608
>>> obiekt
Wywołano metodę ::    __repr__      obiektu ::140283231706064
>>> print(obiekt)
Wywołano metodę ::     __str__      obiektu ::140283231706064
>>> obiekt.metodaInstancyjna()
Wywołano metodę ::metodaInstancyjna obiektu ::140283231706064
>>> Klasa.metodaKlasowa()
Wywołano metodę   metodaKlasowa   klasy   Klasa
>>> Klasa.metodaStatyczna()
Wywołano metodę  metodaStatyczna  klasy   Klasa
'''

'''
Załadowano zawartość pliku '/home/jurbanska/PycharmProjects/Klasy_i_obiekty/klasa.py'
Wywołano metodę     __init__      obiektu 139905103805888
Wywołano metodę     __init__      obiektu 139905103791632
******************************
Po utworzeniu obiektów
	Klasa.tab   -> [1, 2, 3]
	obiekt1.tab -> ['a', 'b', 'c']
	obiekt2.tab -> ['x', 'y', 'z']
----------
Po wykonaniu instrukcji Klasa.tab = [4, 5, 6]'
	Klasa.tab   -> [4, 5, 6]
	obiekt1.tab -> ['a', 'b', 'c']
	obiekt2.tab -> ['x', 'y', 'z']
----------
Po wykonaniu instrukcji obiekt1.tab = [7, 8, 9]'
	Klasa.tab   -> [4, 5, 6]
	obiekt1.tab -> [7, 8, 9]
	obiekt2.tab -> ['x', 'y', 'z']
----------
Po wykonaniu instrukcji 'obiekt2.tab = [-3, -2, -1]'
	Klasa.tab   -> [4, 5, 6]
	obiekt1.tab -> [7, 8, 9]
	obiekt2.tab -> [-3, -2, -1]
******************************
Wywołano metodę      __del__      obiektu 139905103805888
Wywołano metodę      __del__      obiektu 139905103791632
'''

'''
zad. 13
>>> obiekt = Klasa([4, 5, 6], 10, 20)
Wywołano metodę ::    __init__      obiektu ::140626377807600
>>> print(obiekt.tab)
[4, 5, 6]
>>> print(obiekt._zmienna1)
10
>>> print(obiekt.__zmienna2)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'Klasa' object has no attribute '__zmienna2'. Did you mean: '_zmienna1'?
>>> print(obiekt._Klasa__zmienna2)
20

'''
