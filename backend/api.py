import os
import json
import random
from flask import Flask, request
from flask_cors import CORS, cross_origin
from datetime import datetime, timedelta
import pytz
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'






# Auth Endpoints ========================================



@app.route('/signup', methods=['POST'])
@cross_origin()
def sign_up():
    n = f'50100{random.randrange(100000000, 999999999)}'
    existing_files = os.listdir("data")
    if (n in existing_files): n = f'50100{random.randrange(100000000, 999999999)}'
    init_data = {
        "balance": 0,
        "transactions": [],
        "loans": []
    }

    account_file = open(f'data/{n}.json', "a")
    account_file.write(json.dumps(init_data, sort_keys=True, indent=4))

    return n



@app.route('/signin', methods=['POST'])
@cross_origin()
def sign_in():
    n = request.json["accno"]
    try:
        with open(f'data/{n}.json', 'r') as acc_file:
            data = json.load(acc_file)
    except Exception as error:
        print(error)
        return "Account does not exist"

    return data







# Savings Account Endpoints ========================================



@app.route('/deposit', methods=['POST'])
@cross_origin()
def deposit():
    n = request.json["accno"]
    v = float(request.json["value"])
    try:
        acc_file = open(f'data/{n}.json', 'r')
        data = json.loads(acc_file.read())
        acc_file.close()
        data["transactions"].append({
            "value": v,
            "datetime": datetime.now(pytz.timezone('Asia/Kolkata')).strftime("%Y-%m-%d %H:%M")
        })
        data["balance"] += v
        acc_file = open(f'data/{n}.json', 'w')
        acc_file.write(json.dumps(data, sort_keys=True, indent=4))
            
    except Exception as error:
        print(error)
        return "Account does not exist"

    return data



@app.route('/withdraw', methods=['POST'])
@cross_origin()
def withdraw():
    n = request.json["accno"]
    v = float(request.json["value"])
    try:
        acc_file = open(f'data/{n}.json', 'r')
        data = json.loads(acc_file.read())
        acc_file.close()
        data["transactions"].append({
            "value": -1*v,
            "datetime": datetime.now(pytz.timezone('Asia/Kolkata')).strftime("%Y-%m-%d %H:%M")
        })
        data["balance"] -= v
        acc_file = open(f'data/{n}.json', 'w')
        acc_file.write(json.dumps(data, sort_keys=True, indent=4))
            
    except Exception as error:
        print(error)
        return "Account does not exist"

    return data






# Loan Endpoints ========================================



@app.route('/loan', methods=['POST'])
@cross_origin()
def loan():
    n = request.json["accno"]
    t = request.json["type"]
    v = float(request.json["value"])
    e = float(request.json["emi"])
    try:
        acc_file = open(f'data/{n}.json', 'r')
        data = json.loads(acc_file.read())
        acc_file.close()
        data["loans"].append({
            "type": t,
            "value": v,
            "emi": e,
            "start_date": datetime.now(pytz.timezone('Asia/Kolkata')).strftime("%Y-%m-%d %H:%M"),
            "payments": [],
        })
        acc_file = open(f'data/{n}.json', 'w')
        acc_file.write(json.dumps(data, sort_keys=True, indent=4))
            
    except Exception as error:
        print(error)
        return "Account does not exist"

    return data



@app.route('/loanpayment', methods=['POST'])
@cross_origin()
def loanpayment():
    n = request.json["accno"]
    i = int(request.json["index"])
    v = float(request.json["value"])
    try:
        acc_file = open(f'data/{n}.json', 'r')
        data = json.loads(acc_file.read())
        acc_file.close()
        data["loans"][i]["payments"].append({
            "value": v,
            "datetime": datetime.now(pytz.timezone('Asia/Kolkata')).strftime("%Y-%m-%d")
        })
        acc_file = open(f'data/{n}.json', 'w')
        acc_file.write(json.dumps(data, sort_keys=True, indent=4))
            
    except Exception as error:
        print(error)
        return "Account does not exist"

    return data


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=3001)