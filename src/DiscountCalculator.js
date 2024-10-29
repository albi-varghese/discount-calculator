import React, { useState } from 'react';
import './DiscountCalculator.css';

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice) || 0;
    const discount = (price * (parseFloat(discountPercentage) || 0)) / 100;
    setDiscountAmount(discount);
    setFinalPrice(price - discount);
  };

  return (
    <div className="calculator-container">
      <h2>Discount Calculator</h2>

      <div className="label">
        <label>Original Price:</label>
        <input
          type="number"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
          placeholder="Enter original price"
        />
      </div>

      <div className="label">
        <label>Discount Percentage:</label>
        <input
          type="number"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
          placeholder="Enter discount percentage"
        />
      </div>

      <button className="calculate-button" onClick={calculateDiscount}>
        Calculate
      </button>

      <div className="result-container">
        <p>Discount Amount: ${discountAmount.toFixed(2)}</p>
        <p>Final Price: ${finalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default DiscountCalculator;
