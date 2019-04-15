'''
Aleksandra K, Sophia X, Susan L. : SASS
SoftDev2 pd8
K #17: PPFTLCW
2019-04-14
'''

'''
1 [00, 22, 44, 66, 88] (strings)
'''
#loop implementation
def oneLoopy():
    list = []
    for i in range(9):
        if i%2 == 0:
            list.append(str(i)+str(i))
    return list


#list comprehension implementation
def oneCompy():
    return [str(x)+str(x) for x in range(9) if x%2 == 0]

'''
2 [7, 17, 27, 37, 47]
'''
#loop implementation
def twoLoopy():
    list = []
    num = 7
    for i in range(5):
        list.append(num)
        num += 10
    return list


#list comprehension implementation
def twoCompy():
    return [x*10+7 for x in range(5)]

'''
3 [0,0,0,0,1,2,0,2,4]
'''
#loop implementation
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

#list comprehension implementation
def threeCompy():
    return [0 if (x < 4 or x == 6) else 1 if (x==4) else 2 if (x == 5 or x==7) else 4 for x in range(0,9)]

'''
4. all composites on range[0,100] in ascending order
'''
#loop implementation
def fourLoopy():
    list = []
    for i in range(101):
        if len(sixLoopy(i)) > 2: #not including the num and itself
            list.append(i)
    return list

#list comprehension implementation
def fourCompy():
    return [x for x in range(101) if len(sixLoopy(x)) > 2]

'''
6. All divisors of a number listed in ascending order
(done before so that primes are easier to find in prob 5.)
'''
#loop implementation
def sixLoopy(num):
    #all divisors of a num listed in ascending order
    list=[]
    for i in range(1, num+1):
        if num % i == 0:
            list.append(i)
    return list

#list comprehension implementation
def sixCompy(num):
    return [x for x in range(1,num+1) if num%x == 0 ]

'''
5. primes on range [0,100], in ascending order
'''
#loop implementation
def fiveLoopy():
    composites= fourLoopy()
    lst=[]
    for i in range(101):
        if i not in composites:
            lst.append(i)
    return lst

#list comprehension implementation
def fiveCompy():
    composites= fourLoopy()
    return [x for x in range(101) if x not in composites]

'''
7. Transpose a matrix (turns rows into columns and viceversa...)
'''
#loop implementation
def sevenLoopy(matrix):
    list = []
    for i in range(len(matrix[0])):
        x = []
        for y in range(len(matrix)):
            x.append(matrix[y][i])
        list.append(x)
    return list

#list comprehension implementation
def sevenCompy(matrix):
    return [[matrix[x][i] for x in range(len(matrix))] for i in range(len(matrix[0]))]

'''
TESTING
'''
print("~~~~~Testing Problem 1~~~~~~~")
print(oneLoopy())
print(oneCompy())
print("~~~~~Testing Problem 2~~~~~~~")
print(twoLoopy())
print(twoCompy())
print("~~~~~Testing Problem 3~~~~~~~")
print(threeLoopy())
print(threeCompy())
print("~~~~~Testing Problem 4~~~~~~~")
print(fourLoopy())
print(fourCompy())
print("~~~~~Testing Problem 5~~~~~~~")
print(fiveLoopy())
print(fiveCompy())
print("~~~~~Testing Problem 6~~~~~~~")
print(sixLoopy(36))
print(sixCompy(36))
print("~~~~~Testing Problem 7~~~~~~~")
print(sevenLoopy([[1,2,3],[4,5,6]]))
print(sevenCompy([[1,2,3],[4,5,6]]))
