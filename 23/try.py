'''
Aleksandra Koroza
SoftDev2 pd8
K #23: Closure
2019-05-01
'''
import random

def make_HTML_heading(f):
    txt=f()
    def inner():
        return '<h1>'+txt+'</h1>'
    return inner

'''
def greet():
    greetings= ['hello','welcome','ayo']
    return random.choice(greetings)

greet_heading= make_HTML_heading(greet)
#greet_heading is a func now
print(greet_heading())
print(greet_heading())
'''
# the pythonic way == applying a decorator
# equiv to greet = makeHTMLheading(greet)
# memoization: process of storing previously calculated results
# to avoid re-calculation (writing memos)

@make_HTML_heading
def greet():
    greetings= ['hello','welcome','ayo']
    return random.choice(greetings)

greet_heading= make_HTML_heading(greet)
#greet_heading is a func now
print(greet())
#print(greet_heading2())


'''
tree recursion
'''

'''
closure to achieve a memoized fib calculator
- array that stores previous results
-
'''
def memoize(f):
    memo={}
    def helper(x):
        pass
    return helper

def fib(n):
    if n==0:
        return 0
    elif n ==1:
        return 1
    else:
        return fib(n-1)+fib(n-2)

'''
decorated
'''
