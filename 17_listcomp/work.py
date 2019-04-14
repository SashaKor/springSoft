# Susan Lin
# SoftDev2 pd8
# K16 -- Do You Even List?
# F 2019-04-12

UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LOWER = UPPER.lower()
NUMS = [str(i) for i in range(10)]
SYMBOLS = ".?!&#,;:-_*"

def min_pass(password):
    upper = [x for x in password if x in UPPER]
    lower = [x for x in password if x in LOWER]
    nums = [x for x in password if x in NUMS]

    return len(upper) > 0 and len(lower) > 0 and len(nums) > 0

def rate_pass(password):
    strength = 0

    if not min_pass(pass):
        return strength

    upper = [x for x in password if x in UPPER]
    lower = [x for x in password if x in LOWER]
    nums = [x for x in password if x in NUMS]
    symbols = [x for x in password if x in SYMBOLS]

    upper_all = [1 if x in UPPER else 0 for x in password]
    lower_all = [1 if x in LOWER else 0 for x in password]
    nums_all = [1 if x in NUMS else 0 for x in password]
    symbols_all = [1 if x in SYMBOLS else 0 for x in password]

    if len(password) >= 8: strength += 1
    if len(password) >= 16: strength += 1
    if len(password) >= 24: strength += 1
    if len(upper) >= 4: strength += 1
    if len(upper) >= 8: strength += 1
    if len(nums) >= 2: strength += 1
    if len(nums) >= 6: strength += 1
    if len(symbols) >= 2: strength += 1
    if len(symbols) >= 4: strength += 1
    if len(symbols) >= 3 and len(nums) >= 3 and len(upper) >= 3 and len(lower) >= 3: strength += 1


    return strength

password = "123bbb###BB"

print(all) #333222000111







#
