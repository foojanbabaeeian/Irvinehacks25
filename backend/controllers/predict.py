import sys
import json
import joblib

def predict(features):
    model = joblib.load('real_estate_svm_model.pkl')
    predictions = model.predict([features])
    return predictions[0]

if __name__ == "__main__":
    input_features = json.loads(sys.argv[1])
    prediction = predict(input_features)
    print(json.dumps({"predicted_price": prediction}))