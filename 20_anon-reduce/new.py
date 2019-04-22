'''
RASHA: Aleksandra K. Raunak C
SoftDev2 pd8
K #20: Reductio ad Absurdum
2019-04-22
'''
from functools import reduce

f = open('text.txt', 'r').read().split('\n')
lines = [set(x.split(' ')) for x in f] # since split by new line, access each member to split by space

def find_freq(word):
    """find the freq of one word"""
    word_list = [1 for line in lines if word in line] # create a list of 1s that reduce() can use
    return reduce(lambda x,y: x+1 if y==1 else x, word_list) # x takes on the type of the elements in the array

def find_freq_words(words):
    """finds freq of a list of words and returns their total"""
    word_list = [1 for line in f if words in line]
    return reduce(lambda x,y: x+1 if y==1 else x, word_list) # x takes on the type of the elements in the array

def find_largest_freq():
    """find the freq of the word that occurs the most."""
    words_list = {word for line in lines for word in line} # all words possible
    word_freqs = [(find_freq(word), word) for word in words_list] # list of tuples of words and their frequencies
    max_freq = max(word_freqs)
    return max_freq[0], max_freq[1]

def main():
    print("~~~~finding frequency of 'be'~~~~~~")
    print(find_freq('be'))
    print("~~~~finding frequency of 'Jane Austen'~~~~~~")
    print(find_freq_words('Jane Austen'))
    print("~~~~word that occurs the most~~~~~~")
    print(find_largest_freq())

main()
