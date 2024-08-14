# app.py
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process_data():
    data = request.json.get('data')
    # Process the data (for this example, we just send it back with a message)
    response_message = f"Received your data: {data}"
    return jsonify(message=response_message)

if __name__ == '__main__':
    app.run(debug=True)
