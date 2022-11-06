import wyrazenia_regularne
import unittest


class TestRegex(unittest.TestCase):
    def test_words(self):
        self.assertEqual(wyrazenia_regularne.find('Ala'), [[], ['Ala']])
        self.assertEqual(wyrazenia_regularne.find('ma'), [[], ['ma']])
        self.assertEqual(wyrazenia_regularne.find('1kota'), [['1'], ['kota']])
        self.assertEqual(wyrazenia_regularne.find('oraz'), [[], ['oraz']])
        self.assertEqual(wyrazenia_regularne.find('psów20'), [['20'], ['psów']])
        self.assertEqual(wyrazenia_regularne.find('ponadto'), [[], ['ponadto']])
        self.assertEqual(wyrazenia_regularne.find('50'), [['50'], []])
        self.assertEqual(wyrazenia_regularne.find('chomików'), [[], ['chomików']])


if __name__ == '__main__':
    unittest.main()
