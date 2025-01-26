// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Quiz.css';
// // import { callApi } from '../../api';

// // function Quiz() {
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [inputValue, setInputValue] = useState('');
// //   const navigate = useNavigate();
// //   const [error, setError] = useState(null);

// //   const questions = [
// //     { id: 1, key: 'income', text: 'What is your yearly income?', type: 'number' },
// //     { id: 2, key: 'credit_score', text: 'What is your credit score?', type: 'number' },
// //     { id: 3, key: 'address', text: 'Enter your current address:', type: 'text' },
// //     { id: 4, key: 'house_type', text: 'Preferred house type (Apartment, Townhouse, etc.):', type: 'text' },
// //     { id: 5, key: 'bedrooms', text: 'How many bedrooms do you need?', type: 'number' },
// //     { id: 6, key: 'bathrooms', text: 'How many bathrooms do you need?', type: 'number' },
// //     { id: 7, key: 'budget', text: 'What is your maximum budget for housing?', type: 'number' }
// //   ];

// //   const submitAnswer = async (answer) => {
// //     localStorage.setItem(questions[currentQuestionIndex].key, answer);
// //     nextQuestion();
// //   };

// //   const nextQuestion = async () => {
// //     setInputValue('');
// //     if (currentQuestionIndex + 1 < questions.length) {
// //       setCurrentQuestionIndex(currentQuestionIndex + 1);
// //     } else {
// //       const preferences = {
// //         income: localStorage.getItem('income'),
// //         credit_score: localStorage.getItem('credit_score'),
// //         address: localStorage.getItem('address'),
// //         house_type: localStorage.getItem('house_type'),
// //         bedrooms: localStorage.getItem('bedrooms'),
// //         bathrooms: localStorage.getItem('bathrooms'),
// //         budget: localStorage.getItem('budget'),
// //       };
  
// //       try {
// //         const result = await callApi(preferences);
// //         localStorage.setItem('propertyData', JSON.stringify(result));
// //         navigate('/recommendations');
// //       } catch (error) {
// //         setError("Failed to fetch property data. Please try again.");
// //       }
// //     }
// //   };
  

// //   const handleChange = (e) => {
// //     setInputValue(e.target.value);
// //   };

// //   const handleKeyPress = (e) => {
// //     if (e.key === 'Enter') {
// //       e.preventDefault();
// //       submitAnswer(inputValue);
// //     }
// //   };

// //   const prevQuestion = () => {
// //     currentQuestionIndex > 0 ? setCurrentQuestionIndex(currentQuestionIndex - 1) : navigate('/');
// //   };

// //   return (
// //     <div className="AddressInput-container">
// //       <form className="form-container" onSubmit={(e) => { e.preventDefault(); submitAnswer(inputValue); }}>
// //         <input
// //           className="input-container"
// //           type={questions[currentQuestionIndex].type}
// //           value={inputValue}
// //           onChange={handleChange}
// //           placeholder={questions[currentQuestionIndex].text}
// //         />
// //         <div className="submitBtn-container">
// //           <button className="submit-btn" type="submit">Continue</button>
// //         </div>
// //       </form>
// //       <div className="submitBtn-container">
// //         <button className="submit-btn" onClick={prevQuestion}>&lt; Back</button>
// //       </div>
// //       {error && <p className="error">{error}</p>}
// //     </div>
// //   );
// // }

// // export default Quiz;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Quiz.css';
// import { callApi } from '../../api';

// function Quiz() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [inputValue, setInputValue] = useState('');
//   const navigate = useNavigate();
//   const [error, setError] = useState(null);
//   const [predictionResult, setPredictionResult] = useState(null);

//   const questions = [
//     { id: 1, key: 'income', text: 'What is your yearly income?', type: 'number' },
//     { id: 2, key: 'credit_score', text: 'What is your credit score?', type: 'number' },
//     { id: 3, key: 'bedrooms', text: 'How many bedrooms do you need?', type: 'number' },
//     { id: 4, key: 'bathrooms', text: 'How many bathrooms do you need?', type: 'number' },
//     { id: 5, key: 'budget', text: 'What is your maximum budget for housing?', type: 'number' }
//   ];

//   const submitAnswer = async (answer) => {
//     localStorage.setItem(questions[currentQuestionIndex].key, answer);
//     nextQuestion();
//   };

//   const nextQuestion = async () => {
//     setInputValue('');
//     if (currentQuestionIndex + 1 < questions.length) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       const preferences = {
//         income: localStorage.getItem('income'),
//         credit_score: localStorage.getItem('credit_score'),
//         bedrooms: localStorage.getItem('bedrooms'),
//         bathrooms: localStorage.getItem('bathrooms'),
//         budget: localStorage.getItem('budget'),
//       };

//       try {
//         const result = await callApi(preferences);
//         setPredictionResult(result.predicted_price);
//       } catch (error) {
//         setError("Failed to fetch property data. Please try again.");
//       }
//     }
//   };

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       submitAnswer(inputValue);
//     }
//   };

//   const prevQuestion = () => {
//     currentQuestionIndex > 0 ? setCurrentQuestionIndex(currentQuestionIndex - 1) : navigate('/');
//   };

//   return (
//     <div className="AddressInput-container">
//       {!predictionResult ? (
//         <>
//           <form className="form-container" onSubmit={(e) => { e.preventDefault(); submitAnswer(inputValue); }}>
//             <input
//               className="input-container"
//               type={questions[currentQuestionIndex].type}
//               value={inputValue}
//               onChange={handleChange}
//               placeholder={questions[currentQuestionIndex].text}
//             />
//             <div className="submitBtn-container">
//               <button className="submit-btn" type="submit">Continue</button>
//             </div>
//           </form>
//           <div className="submitBtn-container">
//             <button className="submit-btn" onClick={prevQuestion}>&lt; Back</button>
//           </div>
//           {error && <p className="error">{error}</p>}
//         </>
//       ) : (
//         <div className="result-container">
//           <h2>Estimated Property Price:</h2>
//           <p>${predictionResult.toLocaleString()}</p>
//           <button className="submit-btn" onClick={() => navigate('/')}>Go Home</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Quiz;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz.css';
import { predictPropertyPrice } from '../../api';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);

  const questions = [
    { id: 1, key: 'income', text: 'What is your yearly income?', type: 'number' },
    { id: 2, key: 'credit_score', text: 'What is your credit score?', type: 'number' },
    { id: 3, key: 'bedrooms', text: 'How many bedrooms do you need?', type: 'number' },
    { id: 4, key: 'bathrooms', text: 'How many bathrooms do you need?', type: 'number' },
    { id: 5, key: 'budget', text: 'What is your maximum budget for housing?', type: 'number' }
  ];

  const submitAnswer = async (answer) => {
    localStorage.setItem(questions[currentQuestionIndex].key, answer);
    nextQuestion();
  };

  const nextQuestion = async () => {
    setInputValue('');
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const preferences = {
        income: localStorage.getItem('income'),
        credit_score: localStorage.getItem('credit_score'),
        bedrooms: localStorage.getItem('bedrooms'),
        bathrooms: localStorage.getItem('bathrooms'),
        budget: localStorage.getItem('budget'),
      };

      try {
        const result = await predictPropertyPrice(preferences);
        setPredictionResult(result.predicted_price);
      } catch (error) {
        setError("Failed to fetch property price. Please try again.");
      }
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const prevQuestion = () => {
    currentQuestionIndex > 0 ? setCurrentQuestionIndex(currentQuestionIndex - 1) : navigate('/');
  };

  return (
    <div className="AddressInput-container">
      {!predictionResult ? (
        <>
          <form className="form-container" onSubmit={(e) => { e.preventDefault(); submitAnswer(inputValue); }}>
            <input
              className="input-container"
              type={questions[currentQuestionIndex].type}
              value={inputValue}
              onChange={handleChange}
              placeholder={questions[currentQuestionIndex].text}
            />
            <div className="submitBtn-container">
              <button className="submit-btn" type="submit">Continue</button>
            </div>
          </form>
          <div className="submitBtn-container">
            <button className="submit-btn" onClick={prevQuestion}>&lt; Back</button>
          </div>
          {error && <p className="error">{error}</p>}
        </>
      ) : (
        <div className="result-container">
          <h2>Estimated Property Price:</h2>
          <p>${predictionResult.toLocaleString()}</p>
          <button className="submit-btn" onClick={() => navigate('/')}>Go Home</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;