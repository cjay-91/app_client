
import './App.css';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; 

function App() {

  const data = [
    {id:1, name: 'John', age: 20, city: 'New York'}, 
    {id:2, name: 'Mary', age: 25, city: 'Paris'},
    {id:3, name: 'Peter', age: 30, city: 'London'},
  ];

  return (
     <div className="App">
      <DataTable value={data} sortMode='multiple'>
        <Column field="id" header="ID" sortable></Column>
        <Column field="name" header="Name" sortable></Column>
        <Column field="age" header="Age" sortable></Column>
        <Column field="city" header="City" sortable></Column>
      </DataTable>
    </div>
  );
}

export default App;
