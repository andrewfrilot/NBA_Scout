# import necessary libraries
from flask import Flask, render_template
import os


# create instance of Flask app
app = Flask(__name__)

# Create route that renders index.html template
@app.route("/")
def home(): 

    # Return template and data
    return render_template("index.html")

@app.route("/about")
def about(): 

    # Return template and data
    return render_template("about.html")
    
@app.route("/nba")
def nba(): 

    # Return template and data
    return render_template("nba.html")

@app.route("/ncaa")
def ncaa():
    return render_template("ncaa.html")

@app.route("/model")
def models():
    return render_template("model.html")

if __name__ == "__main__":
    app.run(debug=True)