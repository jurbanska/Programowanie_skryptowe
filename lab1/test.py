import main
import unittest
from fractions import Fraction


class Test_TestSum(unittest.TestCase):
    def test_sum_integer_integer(self):
        self.assertEqual(main.sum(2, 2), 4)

    def test_sum_integer_float(self):
        self.assertEqual(main.sum(2, 1.5), 3.5)

    def test_sum_integer_string(self):
        self.assertEqual(main.sum(2, '2'), 4)

    def test_sum_string_string(self):
        self.assertEqual(main.sum('2.1', '2.0'), 4.1)

    def test_sum_integer_wrong_number_in_string(self):
        self.assertEqual(main.sum(2, 'Ala ma kota123'), 2)

    def test_wymierne(self):
        self.assertEqual(main.sum(Fraction(10, 8), Fraction(5, 14)), Fraction(45, 28))

    def test_zespolone(self):
        self.assertEqual(main.sum(1 + 2j, 3 + 4j), 4 + 6j)

    def test_nan_nor_str(self):
        with self.assertRaises(TypeError):
            self.assertEqual(main.sum(1, [2, 3]), 1)


if __name__ == '__main__':
    unittest.main()
