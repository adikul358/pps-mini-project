import os
import numpy as np
from flask import Flask, request

app = Flask(__name__)

@app.route('/createaccount', methods=['POST'])
def create_account():
		return "User created:50120340951"


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000)
    # app.run(port=5002, threaded=False)

    # Serve the app with gevent
    # http_server = WSGIServer(('0.0.0.0', 5000), app)
    # http_server.serve_forever()