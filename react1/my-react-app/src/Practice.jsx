    import { UserContext } from "./UserContext";
    import { useContext } from "react";
    
    export default function Practice() {

        const students = [
            { name: "Aarav Sharma", age: 20, blood: "O+", dob: "2006-05-14" },
            { name: "Ishaan Verma", age: 21, blood: "A+", dob: "2005-09-22" },
            { name: "Ananya Patel", age: 19, blood: "B+", dob: "2007-01-10" },
            { name: "Diya Iyer", age: 22, blood: "AB+", dob: "2004-11-05" },
            { name: "Kabir Singh", age: 20, blood: "O-", dob: "2006-03-30" },
            { name: "Riya Sen", age: 21, blood: "A-", dob: "2005-07-18" },
            { name: "Vihaan Gupta", age: 19, blood: "B-", dob: "2007-12-01" },
            { name: "Meera Nair", age: 22, blood: "AB-", dob: "2004-08-25" },
            { name: "Aditya Roy", age: 20, blood: "O+", dob: "2006-02-17" },
            { name: "Sanya Kapoor", age: 21, blood: "A+", dob: "2005-10-09" }
        ];

        const user = useContext(UserContext);
        return (<>
        <header>
            <h1 className="text-center m-2 text-4xl ">
                This is the Title
            </h1>
            <nav className="flex flex-col md:flex-row justify-between items-center p-4">
                <ul className="flex justify-center gap-4 ml-10">
                    <li>
                        <a href="">Option1</a>
                    </li>
                    <li>
                        <a href="">Option2</a>
                    </li>
                    <li>
                        <a href="">Option3</a>
                    </li>
                    <li>
                        <a href="">Option4</a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <div className="p-2 grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 lg:grid-cols-4 md:p-6 lg:p-10 bg-foreground text-background">
                {students.map((student, index) => (
                    <div key={index} className="border min-h-60 p-4 flex flex-col gap-6 w-full md:w-1/2 lg:w-60">
                        <h1 className="text-center font-bold uppercase mb-3">{student.name}</h1>
                        <div className=" w-full gap-4 flex flex-col">
                            <div>
                        age: {student.age}
                        </div>
                        <div>
                        blood: {student.blood}
                        </div>
                        <div>
                        dob: {student.dob}
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
        </>)
    }