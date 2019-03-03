# Aaron Li, Aleksandra Koroza: Aaronoza
# SoftDev2 pd8
# K07 -- Import/Export Bank
# 2019-02-29

import pymongo

SERVER_ADDR = "69.55.59.139"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.aaronoza
col = db.history

# Given a year, return relevant historical entries
def yearDesc(year):
    if type(year) == type(123):
        cursor = col.find(
            {
                "result.event.date": str(year)
            })
        for entry in cursor:
            print(entry)

    else:
        print("Please input a valid year!\n")

# Given a specific date, return relevant historical entry

# Return all entries before a given years

# Given a place (category 2) returns relevant historical entries

#Given a word (or phrase), returns entries containing the word (or phrase).

yearDesc(1945)
