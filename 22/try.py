
def repeat(x):
    def numPrints(num):
        print(x*num)
    return numPrints

def outer():
    x="foo"
    def inner():
        #nonlocal x
        #getting out of this local scope
        x="bar"
    inner()
    return x


print(outer())

def make_counter():
    counter=0
ctr1 =make_counter()
'''
ctr1() --> 1

'''
