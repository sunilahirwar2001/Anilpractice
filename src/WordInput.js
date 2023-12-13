import React, { useState } from 'react';

const WordInput = () => {
  const [inputText, setInputText] = useState('');
  const [highlightedText, setHighlightedText] = useState('');

  const handleInputChange = (event) => {
    const input = event.target.innerText;
    setInputText(input);
    highlightText(input);
  };

  const highlightText = (input) => {
    const paragraph = document.getElementById('paragraph');
    const text = paragraph.innerText;
    const regex = new RegExp(input, 'gi');
    const highlighted = text.replace(regex, match => `<mark>${match}</mark>`);
    setHighlightedText(highlighted);
  };

  return (
    <div>
      <div
        contentEditable={true}
        onInput={handleInputChange}
        style={{
          border: '1px solid black',
          padding: '10px',
          minHeight: '100px',
        }}
      >
        {inputText}
      </div>
      <div id="paragraph" dangerouslySetInnerHTML={{ __html: highlightedText }} />
    </div>
  );
};

export default WordInput;
