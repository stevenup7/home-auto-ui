from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/getAllServices")
def allServices():
    return jsonify(lighting="Lighting System", security= "Security System" )

if __name__ == "__main__":
    app.run()
