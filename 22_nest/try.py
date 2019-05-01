'''
Aleksandra Koroza
SoftDev2 pd8
K #22: Closure
2019-04-30
'''
'''
testing out variable scopes
def outer():
    x = 'foo'
    def inner():
        nonlocal x
        #nonlocal scope for bar
        x = 'bar'
    inner()
    return x
'''

def repeat(x):
    def times(num):
        return string * num
    return times

def make_counter(accessor_on=False): #default false,
    counter = 0

    def inc():
        nonlocal counter #manipulates global counter
        counter += 1
        return counter

    def accessor():
        return counter

    def decide(access=False):
        if access:
            return accessor()
        else:
            return inc()

    if accessor_on:
        return decide
    return inc

#testing
ctr1 = make_counter()
print('ctr1', ctr1())
print('ctr1', ctr1())
ctr2 = make_counter()
print('ctr2', ctr2())
print('ctr1', ctr1())
print('ctr2', ctr2())
ctr3 = make_counter(True)
print('ctr3', ctr3())
print('ctr3', ctr3())
