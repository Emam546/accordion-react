import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions,setQuestions]=useState(data)
  return <main>
    <div className='container'>
      <h3>question & answers about login</h3>
      <section className='info'>
        {questions.map((info)=>{
          return <SingleQuestion {...info} key={info.id}/>

        })}
      </section>
    </div>

  </main> ;
}

export default App;
