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

// Type Alias vs Interface
// 1. Use extends for Interface and & for type for extending
// 2. Interface is variable while type is fixed
// 3. Interface is faster


//Custom Guard
type User = {
    name: string;
}
type Admin = {
    name: string;
    permissions: string[];
}

function isAdmin(person: User | Admin): person is Admin{
    return "permissions" in person;
}

// Generic
function wrapInArray<T>(item: T): T[]{
    return [item];
}

interface ApiResponse<T>{
    status: "success" | "error";
    code: number;
    data: T;
}
//Usage  as a User
interface Users {
    id: number;
    name: string;
}
const userResponse: ApiResponse<Users> = {
    status:"success",
    code:200,
    data: {id: 1, name: "Alice"},
}
//Usage as a Product
interface Product {
    sku: string;
    price: number;
}
const productResponse: ApiResponse<Product> = {
    status: "success",
    code: 200,
    data: {sku: "PROD-123",price: 29.99}
}
//Generic Contraints
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): void{
    console.log(item.length);
}

