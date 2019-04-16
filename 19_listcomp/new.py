'''
Team : Pretending Greatness
Shafali G, Aleksandra K., Maryann F.
K #19: Ready, Set, Math!
2019-04-16
'''
'''
1 union of sets a,b  the union of [1,2,3] [2,3,4] == [1,2,3,4] no duplicates
'''
def union(l1,l2):
    return [x for x in l1 if x not in l2] | l2


'''
2 intersection of sets a,b  the intersection of [1,2,3] [2,3,4] == [2,3] no duplicates
'''
def intersect(l1,l2):
    return [x for x in l1 if x in l2]

'''
3 set difference of sets a,b  all members of a that aren't members of b [1, 2,3]\[2,3,4] ==[1]
'''
def set_diff(l1,l2):
    return  [x for x in l1 if x not in l2]
'''
4 symmetic difference of sets a,b  all members of a that aren't members of b and members of b that aren't in a.
'''
def symm_diff(l1,l2):
    return  [x for x in l1 if x not in l2] | [x for x in l2 if x not in l1]
'''
5 CARTESIAN PRoduct of a and b members are all possible ordered pairs (a,b) where a is a member of A and b is a member of B
'''
def carty_p(l1,l2):
    return  [(x,y) for x in l1 for y in l2]

'''
6
'''
def no_idea(l1,l2,l3,l4):
    return  intersect(union(carty_p(l1,l2)),(union(carty_p(l3,l4)))

'''
T
E
S
T

C
A
S
E
S
'''
print("Onions:")
print(union([1,2,3], [3,4,5]))
print(union([1,2,3], [3,4]))
print(union([1,2], [3,4,5]))

print("Itchy:")
print(intersect([1,2,3], [3,4,5]))
print(intersect([1,2,3], [3,4]))
print(intersect([1,2], [3,4,5]))

print("Set Diffy:")
print(set_diff([1,2,3], [3,4,5]))
print(set_diff([1,2,3], [3,4]))
print(set_diff([1,2], [3,4,5]))

print("Simon divides")
print(symm_diff([1,2,3], [3,4,5]))
print(symm_diff([1,2,3], [3,4]))
print(symm_diff([1,2], [3,4,5]))

print("carty P")
print(carty_p([1,2,3], [3,4,5]))
print(carty_p([1,2,3], [3,4]))
print(carty_p([1,2], [3,4,5]))
