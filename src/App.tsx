import React, { useState } from 'react';
import Btn from './Btn';

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

  const reusablefunc = <T extends string | number>(a: T, b: T): T => {
    return (a as any) + (b as any);

  }
  console.log(reusablefunc(10, 20))
  const changeName = () => setGender("female")

  const createstudents =() =>{
    setstudents({
      name: "John Doe",
      age: age,
      matricNo: "123456"
    })
  }
 
  return<div> {age}
  <Btn title="Click Me" color="blue" type="button"></Btn>
  </div>
}

export default App