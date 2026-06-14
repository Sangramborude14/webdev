import DigitalClock from "./DigitalClock";

function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): string{
    return `Hello${name}`;
}

//Union types
// Variables can be of multiple types

let id: string | number;
id=1;
id = 'abc';

function printId(id: string| number){
    
    if(typeof id === "string") console.log(id.toUpperCase());
    
    if(typeof id === "number") console.log(id.toFixed(2));
}

//Literal Types
// exact values

type Status = "loading" | "success" | "error";

function handleResponse(status: Status){
    if(status === 'loading'){
        return <div>Loading ....</div>
    }
    if(status === 'success') return <div><DigitalClock/></div>;
    if(status === 'error') return <div>Sorry an Error occured</div>;
}


//Discriminated Unions

interface NetworkLoadingState {
    state: 'loading';
}

interface NetworkSuccessState {
    state: 'success';
    data: string;
}

interface NetworkErrorState {
    state: 'error';
    error: Error;
}

type NetworkState = NetworkErrorState | NetworkSuccessState | NetworkLoadingState;

function renderPage(status: NetworkState){
    switch(status.state){
        case "loading":
            return "Loading...";
        case "success":
            return "Success....";
        case "error":
            return "Error ...";
    }
}
