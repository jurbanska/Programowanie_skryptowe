# -*- coding: utf-8 -*-
if __name__ == '__main__':
    lancuch1 = '''świeci
    dzisiaj słońce
    '''
    lancuch2 = '''lubię
    chodzić na
    spacery
    '''
    print((lancuch1 + lancuch2) * 3)

    lancuch = 'coś po polsku'

    print(lancuch[0])  # first character
    print(lancuch[:2])  # 2 first characters
    print(lancuch[2:])  # every character excluding 2 first
    print(lancuch[-2])  # second to last character
    print(lancuch[-3:])  # last 3 characters
    print(lancuch[::2])  # every other character on even position

    # lancuch[0] = 'q' - you cannot assign new value to already existing string position

