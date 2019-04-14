'''

'''

#1 [00, 22, 44, 66, 88] (strings)
def oneLoopy():
    list = []
    for i in range(9):
        if i%2 == 0:
            list.append(str(i)+str(i))
    return list

print(oneLoopy())

# def oneCompy():
#     return [str(x)+str(x) if x%2 == 0 else # for x in range(9)]
#
# print(oneCompy())

#2 [7, 17, 27, 37, 47]
def twoLoopy():
    list = []
    num = 7
    for i in range(5):
        list.append(num)
        num += 10
    return list

print(twoLoopy())

def twoCompy():
    return [x*10+7 for x in range(5)]

print(twoCompy())

#3 [0,0,0,0,1,2,0,2,4]

def threeLoopy():
    list = []
    for i in range(9):
        if i < 4 or i == 6:
            list.append(0)
        elif i == 4:
            list.append(1)
        elif i == 5 or i == 7:
            list.append(2)
        else:
            list.append(4)
    return list

print(threeLoopy())

# def threeCompy():
#     return = [0 for x in range(0,9) if (x < 4 or x == 6) else 1 if (x==4) else 2 if (x == 5 or x==7) else 0]
#
# print(threeCompy())


#6
def sixLoopy(num):
    #all divisors of a num listed in ascending order
    list=[]
    for i in range(1, num+1):
        if num % i == 0:
            list.append(i)
    return list

print(sixLoopy(36))

def sixCompy(num):
    return [x for x in range(1,num+1) if num%x == 0 ]

print(sixCompy(36))

#4 all composites on range[0,100] in ascending order
def fourLoopy():
    list = []
    for i in range(101):
        if len(sixLoopy(i)) > 2:
            list.append(i)
    return list

print(fourLoopy())

def fourCompy():
    return [x for x in range(101) if len(sixLoopy(x)) > 2]

print(fourCompy())
