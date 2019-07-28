# import necessary libraries
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import os


# create instance of Flask app
app = Flask(__name__)

# Create route that renders index.html template and finds documents from mongo

# Create route that renders index.html template and finds documents from mongo
@app.route("/")
def home(): 

    # Return template and data
    return render_template("index.html")

#create routes for all pages once i figure out all different routes

if __name__ == "__main__": 
    app.run(debug= True)