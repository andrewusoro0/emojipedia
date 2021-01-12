import React from "react";
import Entry from "./Entry";
import Footer from "./Footer"
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
    return(
    <Entry
     key={emojiTerm.id}
     emoji={emojiTerm.emoji}
     name={emojiTerm.name}
     description={emojiTerm.meaning}
     />
    )
}

function App() {
  return (
    <div>
      <h1>
        <span>emoji😃dictionary!!</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
      <Footer />
    </div>
  );
}

export default App;
