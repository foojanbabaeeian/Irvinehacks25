from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend access from a different port

# Load trained SVM model and scaler
svm_model = joblib.load('model/real_estate_svm_model.pkl')
scaler = joblib.load('model/scaler.pkl')

@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        input_features = np.array([
            float(data['income']),
            float(data['credit_score']),
            float(data['bedrooms']),
            float(data['bathrooms']),
            float(data['budget'])
        ]).reshape(1, -1)

        scaled_features = scaler.transform(input_features)
        predicted_price = svm_model.predict(scaled_features)

        return jsonify({"predicted_price": predicted_price[0]})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)
