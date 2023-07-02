
import './App.css';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; 
import fakedata from "./data1.json";
import React from 'react';

function App() {

  const data = React.useMemo(() => fakedata, []);

  return (
     <div className="App">
      <DataTable value={data} sortMode='multiple'>
        <Column field="document_title" header="document_title" sortable></Column>
        <Column field="short_answers" header="short_answer" sortable></Column>
        <Column field="question_text" header="question_text" sortable></Column>
        <Column field="yes_no_answer" header="yes_no_answer" sortable></Column>
      </DataTable>
    </div>
  );
}

export default App;
