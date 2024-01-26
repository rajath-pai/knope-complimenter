import React, { useState } from 'react';
import axios from 'axios';

const Synonyms = () => {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSynonyms = async () => {
    try {
      setLoading(true);

      const apiKey = 'YOUR_MERRIAM_WEBSTER_API_KEY';
      const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${apiKey}`);

      // Parse the response to extract synonyms
      const fetchedSynonyms = response.data[0]?.meta?.syns[0] || [];
      setSynonyms(fetchedSynonyms);
    } catch (error) {
      console.error('Error fetching synonyms:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <label>
        Enter a word:
        <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
      </label>
      <button onClick={fetchSynonyms} disabled={loading}>
        {loading ? 'Fetching Synonyms...' : 'Fetch Synonyms'}
      </button>
      <ul>
        {synonyms.map((synonym, index) => (
          <li key={index}>{synonym}</li>
        ))}
      </ul>
    </div>
  );
};

export default SynonymsComponent;
