from fractions import Fraction


def sum(arg1, arg2):
    try:
        if not isinstance(arg1, complex) and not isinstance(arg1, Fraction):
            arg1 = float(arg1)

        if not isinstance(arg2, complex) and not isinstance(arg2, Fraction):
            arg2 = float(arg2)
    except ValueError:
        if isinstance(arg1, str):
            arg1 = 0
        if isinstance(arg2, str):
            arg2 = 0

    return arg1 + arg2


if __name__ == '__main__':
    print('suma = ', sum(2, 1))
    # print(f"__name__ = {__name__}")  #nazwa: __main__
    # print(f"suma = {sum(2, 1)}") # przy uruchamianiu bezpośrednio

# 2 + 2 = 4
# 2 + 2.0 = 4.0
# 2 + '2' = [TypeError: unsupported operand type(s) for +: 'int' and 'str']
# '2' + '2' = '22'
'''
>>> zmienna = 2
>>> type(zmienna)
<class 'int'>

>>> zmienna = '2'
>>> type(zmienna)
<class 'str'>

typowanie silne, dynamiczne
'''
