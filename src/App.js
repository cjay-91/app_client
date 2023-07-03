
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
        <Column field="question_text" header="question_text" sortable></Column>
        <Column field="0" header="short_answers_1" sortable></Column>
        <Column field="1" header="short_answers" sortable></Column>
        <Column field="2" header="short_answers" sortable></Column>
        <Column field="3" header="short_answers" sortable></Column>
        <Column field="4" header="short_answers" sortable></Column>
        <Column field="5" header="short_answers" sortable></Column>
        <Column field="6" header="short_answers" sortable></Column>
        <Column field="7" header="short_answers" sortable></Column>
        <Column field="8" header="short_answers" sortable></Column>
        <Column field="9" header="short_answers" sortable></Column>
        <Column field="10" header="short_answers" sortable></Column>
        <Column field="11" header="short_answers" sortable></Column>
        <Column field="12" header="short_answers" sortable></Column>
        <Column field="13" header="short_answers" sortable></Column>
        <Column field="14" header="short_answers" sortable></Column>
        <Column field="15" header="short_answers" sortable></Column>
        <Column field="16" header="short_answers" sortable></Column>
        <Column field="17" header="short_answers" sortable></Column>
        <Column field="18" header="short_answers" sortable></Column>
        <Column field="19" header="short_answers" sortable></Column>
        <Column field="yes_no_answer" header="yes_no_answer" sortable></Column>
      </DataTable>
    </div>
  );
}

export default App;
