# A simple data tables in React

## Table of Contents
* [Installation](#installation)
* [Examples](#examples)

## Installation
Installation is done using the npm install command:
```console
npm i new-react-datatables
```
> NOTE : Node.js v16.6.1 and higher is required

## Examples
Here is a simple example of new-react-datatables being used in an app:
```js
import "./App.css";
import { Table } from "new-react-datatables";

const mockedColumns = { 
    first_name: "First Name", 
    last_name: "Last Name",
    start_date: { value: "Start Date", isDate: true },
    department: "Department",
    birthdate: { value: "Date of Birth", isDate: true },
    street: "Street",
    city: "City",
    state: "State",
    zipcode: "Zip Code"
};

const mockedData = [
    {"first_name":"Maisie","last_name":"Yesson","start_date":"2021-01-14 17:49:30","department":"Legal","birthdate":"1964-11-10 20:13:30","street":"1 Bowman Street","city":"Boise","state":"Idaho","zipcode":83732},
    {"first_name":"Jozef","last_name":"Bolletti","start_date":"2019-07-16 20:29:11","department":"Sales","birthdate":"1965-06-17 19:14:39","street":"067 Hazelcrest Court","city":"Tampa","state":"Florida","zipcode":33686}
];

function App() {
    return (
        <div className="App">
            <Table columns={mockedColumns} data={mockedData} />
        </div>
    );
}

export default App;
```
Here is an example of new-react-datatables with a search bar being used in an app:
```js
import "./App.css";
import { useState } from "react";
import { Search, Table } from "new-react-datatables";

const mockedColumns = { 
    first_name: "First Name", 
    last_name: "Last Name",
    start_date: { value: "Start Date", isDate: true },
    department: "Department",
    birthdate: { value: "Date of Birth", isDate: true },
    street: "Street",
    city: "City",
    state: "State",
    zipcode: "Zip Code"
};

const mockedData = [
    {"first_name":"Maisie","last_name":"Yesson","start_date":"2021-01-14 17:49:30","department":"Legal","birthdate":"1964-11-10 20:13:30","street":"1 Bowman Street","city":"Boise","state":"Idaho","zipcode":83732},
    {"first_name":"Jozef","last_name":"Bolletti","start_date":"2019-07-16 20:29:11","department":"Sales","birthdate":"1965-06-17 19:14:39","street":"067 Hazelcrest Court","city":"Tampa","state":"Florida","zipcode":33686}
];

function App() {
    const [data] = useState(mockedData);
    const [filteredData, setFilteredData] = useState(data);

    return (
        <div className="App">
            <Search data={filteredData} setData={setFilteredData} originData={data} />
            <Table columns={mockedColumns} data={filteredData} />
        </div>
    );
}

export default App;
```