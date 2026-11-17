import React, { useState } from 'react';

enum genderProbs {
  male,
  female
}

interface studentProbs{
  name: string;
  age: number;
  matricNo: string; 
}

type funcProps = {a: string; b: string};
const App = () => {
  // const [name, setname] = useState<string | number>(0) 
  const [age, setage] = useState<number>(0)
  const[gender, setGender] = useState<"male" | "female">()
  const [student, setstudents] = useState<studentProbs>()


  const func = ({a, b}: funcProps): string => {
    return a + b;
  }
  const changeName = () => setGender("female")

  const createstudents =() =>{
    setstudents({
      name: "John Doe",
      age: age,
      matricNo: "123456"
    })
  }
 
  return<div> {age}</div>
}

export default App