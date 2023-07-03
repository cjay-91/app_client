
import './App.css';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; 
import fakedata from "./data1.json";
import React from 'react';
import { useState } from 'react';
import {FilterMatchMode} from "primereact/api";
import { InputText } from 'primereact/inputtext';

function App() {

  const data = React.useMemo(() => fakedata, []);
  const [filters,setFilters] = useState({
    global:{value:null,matchMode:FilterMatchMode.CONTAINS}
  });

  return (
     <div className="App">

      <InputText
      onInput = {(e)=>setFilters({global:{value:e.target.value, matchMode:FilterMatchMode.CONTAINS},
      })}
      />

      <DataTable value={data} sortMode='multiple' filters ={filters} paginator rows={100} rowsPerPageOptions={[1,2,3,4,5]} totalRecords={100}>
        <Column field="document_title" header="document_title" sortable></Column>
        <Column field="question_text" header="question_text" sortable></Column>
        <Column field="0" header="short_answers_1" sortable></Column>
        <Column field="1" header="short_answers" sortable></Column>
        <Column field="2" header="short_answers" sortable></Column>
        <Column field="3" header="short_answers" sortable></Column>
        <Column field="4" header="short_answers" sortable></Column>
        <Column field="5" header="short_answers" sortable></Column>
        <Column field="6" header="short_answers" sortable></Column>

        {/* <Column field="7" header="short_answers" sortable></Column>
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
        <Column field="20" header="short_answers" sortable></Column>
        <Column field="21" header="short_answers" sortable></Column>
        <Column field="22" header="short_answers" sortable></Column>
        <Column field="23" header="short_answers" sortable></Column>
        <Column field="24" header="short_answers" sortable></Column>
        <Column field="25" header="short_answers" sortable></Column>
        <Column field="26" header="short_answers" sortable></Column>
        <Column field="27" header="short_answers" sortable></Column>
        <Column field="28" header="short_answers" sortable></Column>
        <Column field="29" header="short_answers" sortable></Column>
        <Column field="30" header="short_answers" sortable></Column>
        <Column field="31" header="short_answers" sortable></Column>
        <Column field="32" header="short_answers" sortable></Column>
        <Column field="33" header="short_answers" sortable></Column>
        <Column field="34" header="short_answers" sortable></Column>
        <Column field="35" header="short_answers" sortable></Column>
        <Column field="36" header="short_answers" sortable></Column>
        <Column field="37" header="short_answers" sortable></Column>
        <Column field="38" header="short_answers" sortable></Column>
        <Column field="39" header="short_answers" sortable></Column>
        <Column field="40" header="short_answers" sortable></Column>
        <Column field="41" header="short_answers" sortable></Column>
        <Column field="42" header="short_answers" sortable></Column>
        <Column field="43" header="short_answers" sortable></Column>
        <Column field="44" header="short_answers" sortable></Column>
        <Column field="45" header="short_answers" sortable></Column>
        <Column field="46" header="short_answers" sortable></Column>
        <Column field="47" header="short_answers" sortable></Column>
        <Column field="48" header="short_answers" sortable></Column>
        <Column field="49" header="short_answers" sortable></Column> */}
        <Column field="yes_no_answer" header="yes_no_answer" sortable></Column>
      </DataTable>
    </div>
  );
}

export default App;
