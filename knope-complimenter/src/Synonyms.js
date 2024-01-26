// Used to fetch synonyms of words from Merriam Webster using the Thesaurus API.

import React, { useState } from 'react';
import axios from 'axios';

const YourThesaurusComponent = () => {
    const [word, setWord] = useState('');
    const [synonyms, setSynonyms] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchSynonyms = async () => {
      try {
        setLoading(true);
  
        const apiKey = '178b06b1-1acc-4e05-8182-e2870e4228e9';
        
        const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${apiKey}`);
  
        console.log(response);
  
        // Parse the response to extract synonyms
        const fetchedSynonyms = response.data[0]?.meta?.syns[0] || [];
        console.log("Synonyms:", fetchedSynonyms);
        setSynonyms(fetchedSynonyms);
      } catch (error) {
        console.error('Error fetching synonyms:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleClickWord = () => {
        console.log("RAJATH");
      let my_word = document.getElementById("my_word").innerText.toString();
      console.log("RAJATH", document.getElementById("my_word").innerText.toString());
      setWord({my_word});
      fetchSynonyms();
    }
  
    return (
      <div>
        <button onClick={handleClickWord} disabled={loading}>
        </button>
        <p>{synonyms}</p>
      </div>
    );
  };

  export default YourThesaurusComponent;