# Team Mangoes -- Aleksandra Koroza, Derek Song, and Zane Wang
# SoftDev2 pd8
# K#08 -- Ay Mon, Go Git It From Yer Flask
# 2019-03-06

from pymongo import MongoClient
from flask import Flask, render_template
import json

app = Flask(__name__)

SERVER_ADDR='104.248.53.196'
client = MongoClient(SERVER_ADDR, 27017)
db = client.MOZArella
collection = db.movies

with open('movies.json') as f:
    lines = f.read()
    data = json.loads(lines)
    collection.insert_many(data)

@app.route("/")
def home():
    return render_template("ipset.html")

@app.route("/search")
def search():
    return render_template("movies.html")

@app.route("/result")
def display():
    return render_template("detail.html")

def find_year(num):
    movies = []
    for doc in collection.find({"year" : num}):
        ret.append(doc)
    return movies

'''
def find_genre(genre):
    movies = []
    for doc in collection.find({"genres" : "genres"["genres".find(genre)]}):
        ret.append(doc)
    return movie
'''

def find_movie(title, year):
    movies = []
    for doc in collection.find({"$and": [{"title" : title}, {"year" : year}]}):
        ret.append(doc)
    return movies

'''
def find_cast(person):
    movies = []
    for doc in collection.find({"cast" : "cast"["cast".find(person)]}):
        ret.append(doc)
    return movies
'''

#print(find_year(1900))
#print(find_movie("After Dark in Central Park", 1900))
#print(find_cast("Dwayne Johnson"))
#print(find_genre("action"))

if __name__ == "__main__":
    app.debug = True
    app.run()
