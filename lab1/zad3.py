import sys


def pierwsza(x):
    if x < 2:
        return False

    for i in range(2, int(x ** (1 / 2)) + 1):
        if x % i == 0:
            return False
    return True


for z in sys.argv[1::]:
    try:
        if pierwsza(int(z)):
            print(z)

    except ValueError:
        pass
