from enum import Enum


class Day(Enum):
    MON = 0
    TUE = 1
    WED = 2
    THU = 3
    FRI = 4
    SAT = 5
    SUN = 6

    def difference(self, day):
        for i in range(-3, 4):  # maksymalnie 3 dni różnicy między dowolnymi dwoma dniami
            if (self.value + i) % 7 == day.value:
                return i


def nthDayFrom(n, day):
    return Day((day.value + n) % 7)  # modulo 7 zabezpiecza nas przed wyjściem poza skalę
