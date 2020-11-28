import React, {useCallback,useState} from 'react';
import Title from './Title';
import Button from './Button';
import Count from './Count';

const ParentComponent=()=>{
const [age,setAge]= useState(20);
const [salary,setSalary]=useState(1000);

const IncreaseAge=useCallback(()=>{
    setAge(prevAge=>prevAge+10);

},[age])
const IncreaseSalary=useCallback(()=>{
    setSalary(prevSal=>prevSal+1000)
},[salary])
    return(
        <div>
          <Title />
          <Count text="Age" count={age} />
          <Button handleClick={IncreaseAge}> Increase Age</Button>
          <Count text="Salary" count={salary} />
          <Button handleClick={IncreaseSalary} >Increase Salary</Button>
        </div>
    )
}

export default ParentComponent;