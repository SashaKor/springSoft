'''
Aleksandra K. Sophia X.: Soleks
SoftDev2 pd8
K #06: Yummy Mongo Py
2019-03-01
'''
import pymongo

SERVER_ADDR = "178.128.156.17"
connection=pymongo.MongoClient(SERVER_ADDR)
db= connection.test
collection= db.restaurants


# Finding all restaurants within a specified borough
def findBorough(b):
    if type(b) == type("abc"): #checking that its a string
        cursor = collection.find({"borough": b})
        for entry in cursor:
            print(entry)
    else:
        print("Please enter a string! \n")

# Finding all restaurants within a specified zipcode
def findZip(zip):
    if type(zip) == type(0): #entry is a number, not string
        cursor = collection.find({"address.zipcode": str(zip)})
        for entry in cursor:
            print(entry)
    else:
        print("Please enter a zipcode!\n")

# Finding all restaurants within a zipcode AND specified grade
def findGradeZip(zip, grade):
    if type(grade) == type("abc") and type(zip) == type(0): #letter grades
        cursor = collection.find({
        "$and": [ #note that there are multiple entries for grades
        {"address.zipcode": str(zip)},
        {"grades.grade": grade}]
        })
        for entry in cursor:
            print(entry)
    else:
        print("Please input a zipcode and a letter grade! \n")

# Finding restaurants in zipcode with a score below a specified threshold
def printZipScore(zip, score):
    if type(score) == type(zip) == type(0): #all number inputs
        cursor = collection.find({
        "$and":[
        {"address.zipcode": str(zip)},
        {"grades.score": {"$lt": score}}
        ]})
        for entry in cursor:
            print(entry)
    else:
        print("Invalid Input! \n")

'''
testing funcs
'''
#findBorough("Brooklyn")
#findZip(11214)
#findGradeZip(11214,"A")
#printZipScore(11214,20)
