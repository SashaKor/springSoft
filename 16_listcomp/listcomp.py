'''
Aleksandra Koroza
SoftDev2 pd8
K #16: Do You Even List?
2018-04-11
'''
upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lower= "abcdefghijklmnopqrstuvwxyz"
nums= "1234567890"
nonAlpha= ".?!&#,;:-_*"

'''
returns whether a password (a string) meets a minimum threshold:
it contains a mixture of upper-
and lowercase letters, and at least one number

'''
def min_thresh(str):
    lst= [0 if x in upper else 1 if x in lower else 2 if x in nums else 3 for x in str]

    if 0 in lst and 1 in lst and 2 in lst:
        return True
    return False

'''
returns a lower integer for a weak password and a higher integer for a stronger password.
considers numbers, non-alphanumeric chars, and mixture of upper/lower

scale of 1-10

needs more work ~
'''
def pass_rate(str):
    lst= [0 if x in upper else 1 if x in lower else 2 if x in nums else 3 if x in nonAlpha else 4 for x in str]
    #each 1 represents a pair of upper and lower values
    lst2= [ 1 if (str[i] in upper and str[i+1] in lower) or (str[i] in lower and str[i+1] in upper) else 0 for i in range(0,len(str)-1,2)]
    #start with bare minimum
    if 0 in lst and 1 in lst and 2 in lst:
        #just long enough to cover
        if len(str)== 3:
            return 1
        #contains a non alpha, still just long enough to cover
        elif len(str)== 4 and 3 in lst:
            return 2
        #contains at least a pair of upper/lower letters
        elif 1 in lst2:
            if lst2.count(1) >= 5 and lst.count(3) >= 2:
                return 10
            if lst2.count(1) == 5 and lst.count(3) > 2:
                return 9
            if lst2.count(1) > 4 and 3 in lst:
                return 8
            if lst2.count(1) == 4 and lst.count(3) >= 3:
                return 7
            if lst2.count(1) == 3 and lst.count(3) == 3:
                return 6
            if lst2.count(1) == 2 and lst.count(3) == 2:
                return 5
            if lst2.count(1) == 2 and 3 in lst:
                return 4
            if lst2.count(1) == 2:
                return 3


    else:
        return "please enter a valid password!"

'''
TESTING
'''
# 1. min_thresh
print(min_thresh("Aa1"))
print(min_thresh("bbbbb1"))
print(min_thresh("bbbbbA"))
print(min_thresh("aaa"))

# 1. pass_rate
print(pass_rate("Aa1"))
print(pass_rate("Aa1?"))
print(pass_rate("bbb"))
print(pass_rate("AaAa1"))
print(pass_rate("AaAa1?"))
print(pass_rate("AaAa1??"))
print(pass_rate("AaAaAa1???"))
print(pass_rate("AaAaAaAa1???"))
