'''
Aleksandra Koroza
SoftDev2 pd8
K #23: Closure
2019-05-01
'''

def memoize(f):
    memo={}
    def helper(x):
        if x not in memo:
            memo[x]=f(x) #store fib value in dictionary
        return memo[x] #dont have to recalculate every time, just reference value
    return helper

# a memoized fib calculator
@memoize
def fib(n):
    if n==0:
        return 0
    elif n ==1:
        return 1
    else:
        return fib(n-1)+fib(n-2)


'''
testing
'''
'''
fib= memoize(fib)
print(fib(0))
print(fib(1))
print(fib(4))
print(fib(40))
'''

'''
decorated
'''
print(fib(0))
print(fib(1))
print(fib(4))
print(fib(40))
