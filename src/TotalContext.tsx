import { createContext, ReactNode, useContext, useEffect, useState } from "react";


interface TotalContextProps {
  children: ReactNode;
}


interface SumContextProps {
  start: boolean;
  setStart:(start: boolean) => void;
  end: boolean;
  setEnd:(end: boolean) => void;
  listNum: number[];
  setListNum:(listNum: number[]) => void;
  count: number;
  setCount:(count: countProps) => void;
  sum: number;
  setSum:(count: number) => void;
}

type countProps = 1 | 2 | 3 | 4 | 5 | 6;

const num1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63]
const num2 = [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63]
const num3 = [4, 5, 6, 7, 12, 13, 14, 15, 20 ,21 ,22 ,23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63]
const num4 = [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26 ,27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 51, 62, 63]
const num5 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]
const num6 = [32, 33, 34, 35, 36, 37, 38, 39, 40 ,41 ,42 ,43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]

const list = {
  "1":[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63],
  "2":[2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63],
  "3": [4, 5, 6, 7, 12, 13, 14, 15, 20 ,21 ,22 ,23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63],
  "4": [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26 ,27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 51, 62, 63],
  "5": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63],
  "6": [32, 33, 34, 35, 36, 37, 38, 39, 40 ,41 ,42 ,43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]
}

//export const TotalContext = createContext<SumContextProps>({  start: false, setStart: () => {} })
//export const useTotalContext = () => useContext(TotalContext)

export const TotalContext = createContext<SumContextProps>({} as SumContextProps)

export function UseTotalContext ({children} : TotalContextProps) {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);
  const [count, setCount] = useState<countProps>(1);
  const [sum, setSum] = useState(0);
  const [listNum, setListNum] = useState(num1)

  useEffect(()=>{
    
    if (count >=1 && count <=6){
      setListNum(list[count])
    }
    

  })

  return(
  <TotalContext.Provider value={{start, setStart, listNum, setListNum, sum, setSum, count, setCount, end, setEnd}}>
    {children}
  </TotalContext.Provider>
  )
}


export function useSum() {
  const context = useContext(TotalContext)

  return context
}