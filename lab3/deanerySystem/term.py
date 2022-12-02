from day import Day


class Term:
    __day = Day

    def __init__(self, day, hour, minute):
        self.hour = hour
        self.minute = minute
        self.duration = 90
        self.__day = day

    def __str__(self):
        day_name = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]
        return f"{day_name[self.__day.value]} {self.hour}:{self.minute} [{self.duration}]"


    #nieskończone