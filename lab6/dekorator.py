from inspect import signature


def argumenty(arguments):
    def inner(f):
        def wrapper(*args, **kwargs):
            liczba_argumentow = len(list(signature(f).parameters))
            lista_argumentow = list(args)
            x = liczba_argumentow - len(lista_argumentow)

            if x > len(arguments):
                raise TypeError(f'{f.__name__} takes exactly {liczba_argumentow} arguments ({len(arguments) + len(lista_argumentow)} given)')

            for i in range(0, x):
                lista_argumentow.append(arguments[i])

            return f(*lista_argumentow)

        return wrapper

    return inner


class Operacje:
    argumentySuma = [4, 5]
    argumentyRoznica = [4, 5, 6]

    def __init__(self):
        self.update()

    @argumenty(argumentySuma)
    def suma(self, a, b, c):
        print("%d+%d+%d=%d" % (a, b, c, a + b + c))
        return a + b + c

    @argumenty(argumentyRoznica)
    def roznica(self, x, y):
        print("%d-%d=%d" % (x, y, x - y))
        return x - y

    def update(self):
        self.suma = (argumenty(self.argumentySuma))(self.suma)
        self.roznica = (argumenty(self.argumentyRoznica))(self.roznica)

    def __setitem__(self, key, value):
        if key == 'suma':
            self.argumentySuma = value
        elif key == 'roznica':
            self.argumentyRoznica = value
        self.update()


if __name__ == '__main__':
    op = Operacje()
    op.suma(1, 2, 3)  # Wypisze: 1+2+3=6
    op.suma(1, 2)  # Wypisze: 1+2+4=7 - 4 jest pobierana z tablicy 'argumentySuma'
    op.suma(1)  # Wypisze: 1+4+5=10 - 4 i 5 są pobierane z tablicy 'argumentySuma'
    # op.suma() #TypeError: suma() takes exactly 3 arguments (2 given)
    op.roznica(2, 1)  # Wypisze: 2-1=1
    op.roznica(2)  # Wypisze: 2-4=-2
    wynik = op.roznica()  # Wypisze: 4-5=-1

    # Zmiana zawartości listy argumentów dekoratora  dla metody 'suma'
    op['suma'] = [1, 2]
    # oznacza, że argumentySuma=[1,2]

    # Zmiana zawartości listy argumentów dekoratora  dla metody 'roznica'
    op['roznica'] = [1, 2, 3]
    # oznacza, że argumentyRoznica=[1,2,3]

    op.suma(0)
