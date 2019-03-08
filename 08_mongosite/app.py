# Team Mangoes -- Aleksandra Koroza, Derek Song, and Zane Wang
# SoftDev2 pd8
# K#08 -- Ay Mon, Go Git It From Yer Flask
# 2019-03-06

from pymongo import MongoClient
from flask import Flask, redirect, url_for, render_template, session, request, flash, get_flashed_messages
import json
import mongo

app = Flask(__name__)

'''
now handled by a func
#SERVER_ADDR='104.248.53.196' #zane
SERVER_ADDR='178.128.156.17' #AK
client = MongoClient(SERVER_ADDR, 27017)
db = client.MOZArella
collection = db.movies


with open('movies.json') as f:
    lines = f.read()
    data = json.loads(lines)
    collection.insert_many(data)
 '''
@app.route('/', methods=['POST','GET'])
def index():
    print("didnt go through")
    return render_template("ipset.html")


@app.route("/enter",methods=['POST','GET'] )
def enter():
    if request.form["submit"] == "submit":
        IP= request.form["IP"]
        print(IP)
        #SERVER_ADDR='104.248.53.196' #zane
        client = MongoClient(IP, 27017)
        db = client.MOZArella
        collection = db.movies

        with open('movies.json') as f:
            lines = f.read()
            data = json.loads(lines)
            collection.insert_many(data)

        return render_template("movies.html", IP=IP) #renders movie.html with the imported collection
    print("stuff went down")
    return render_template("ipset.html")

@app.route("/search",methods=['POST','GET'])
def display():
    return render_template("detail.html")



if __name__ == "__main__":
    app.debug = True
    app.run()
