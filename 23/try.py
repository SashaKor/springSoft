'''
Aleksandra Koroza
SoftDev2 pd8
K #22: Closure
2019-04-30
'''

def make_HTML_heading(f):
    txt=f()
    def inner():
        return '<h1>'+txt+'</h1>'
    return inner

def greet():
    greetings= ['hello','welcome','ayo']
    return random.choice(greetings)

greet_heading= make_HTML_heading(greet)
