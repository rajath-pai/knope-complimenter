// Used to fetch synonyms of words from Merriam Webster using the Thesaurus API.

import React, { useState } from 'react';
import axios from 'axios';

const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
};

const YourThesaurusComponent = () => {
    var [word, setWord] = useState('');
    const [synonyms, setSynonyms] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const fetchSynonyms = async () => {
      try {
        setLoading(true);
  
        const apiKey = '178b06b1-1acc-4e05-8182-e2870e4228e9';

        console.log("RAJATH: word: [", {word}, "]");
        
        const response = await axios.get(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${apiKey}`);
  
        console.log(response);
  
        // Parse the response to extract synonyms
        const fetchedSynonyms = response.data[0]?.meta?.syns[0] || [];
        console.log("Synonyms:", fetchedSynonyms);
        setSynonyms(fetchedSynonyms);

        let adj_word_set = document.getElementsByClassName("random-words-adj");
        let adj_word = "";
        if (adj_word_set.length > 0) {
            console.log("Synonyms Length:", fetchedSynonyms.length);
            let synonymIdx = randomNumberInRange(0, fetchedSynonyms.length-1);
            console.log("RAJATH: idx:["+fetchedSynonyms+"] word:["+fetchedSynonyms[synonymIdx]+"]");
            adj_word_set[0].innerText = fetchedSynonyms[synonymIdx];
            console.log("RAJATH: idx:["+synonymIdx+"] word:["+fetchedSynonyms[synonymIdx]+"]");
        }

      } catch (error) {
        console.error('Error fetching synonyms:', error);
      } finally {
        setLoading(false);
      }
    };
  
    const replaceWordWithSynonym = () => {
      let adj_word_set = document.getElementsByClassName("random-words-adj");
      let adj_word = "";
      if (adj_word_set.length > 0) {
        document.getElementById("word-replacer").hidden = false;
        adj_word = adj_word_set[0].innerText.toString().trim();
      }
      
      console.log("RAJATH["+adj_word+"]");
      word = adj_word;
      setWord({adj_word});
      fetchSynonyms();

    }
  
    return (
      <div className='word-replacer' hidden={true} onMouseOver={replaceWordWithSynonym} id="word-replacer">
        Hover over this box to replace any adjective with a synonym and get a more random compliment or insult!
      </div>
    );
  };

  export default YourThesaurusComponent;