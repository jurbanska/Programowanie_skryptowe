import sys


def even(num: int):
    if int(num) % 2 == 0:
        return True
    return False


def open_file(name: str):
    return open(name).read().split()


if __name__ == "__main__":
    numbers = list(map(lambda name: open_file(name), sys.argv[1:]))

    even_numbers = list(filter(even, sum(numbers, [])))

    print(len(even_numbers))
