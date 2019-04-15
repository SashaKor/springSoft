'''
Aleksandra K, Sophia X.
SoftDev2 pd8
K<n> -- <Title/Topic/Summary>
<yyyy>-<mm>-<dd>
'''

'''
pythogorean triples on range [1,n)
'''



'''
quicksort (...in 1 line?)

1. choose middle value for partition
q_sort left of pivot, q_sort right of pivot
'''
def q_sort(lst):
    return [lst[len(lst)/2] q_sort(left)+ [pivot] + q_sort(right)]
