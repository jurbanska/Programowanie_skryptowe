# -*- coding: utf-8 -*-
import re


def find(word):
    liczba = re.findall('\d+', word)
    if len(liczba) != 0:
        print("Liczba: ", *liczba, sep=' ')

    wyraz = re.findall('[A-Za-ząĄęĘżŻźŹćĆśŚóÓłŁńŃ]+', word)
    if len(wyraz) != 0:
        print("Wyraz: ", *wyraz, sep=' ')

    return [liczba, wyraz]


if __name__ == '__main__':
    while True:
        word = input()
        find(word)


