import { useContext, useState } from "react";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Game } from "../../components/Game";
import { GoogleAds } from "../../components/GoogleAds";
import { Result } from "../../components/Result";
import { Sidebar } from "../../components/Sidebar";
import { TotalContext, useSum, UseTotalContext } from "../../TotalContext";
import { Container, Main, Buttons } from "./styled";

type countProps = 1 | 2 | 3 | 4 | 5 | 6;

export function Dashboard () {
  //const [start, setStart ] = useState(false)
  const {start, setStart, sum, setSum, count, setCount, listNum, setListNum, end, setEnd}= useSum()

  function handleStart(){
    setStart(!start)
    setSum(0)
  }

  function finish(count: number){
    if (count ===6){
    setEnd(true);
    setStart(false);
    setCount(1);}
  }

  function handleSum(){
    if (count < 6){
     setCount(count + 1 as countProps)
    }
    setSum(sum+listNum[0])
    finish(count)
  }

  function handleNotSum(){
    if (count < 6){
      setCount(count + 1 as countProps)
    }
    finish(count)
  }


  return (
    <Container>
      <Sidebar />
      <Main>
        {start ?
          <>
            <Game listNum={listNum}/> 
          </>
         : <>
          <section>
            { end 
              ? <>
                  <Result result={sum} />
                </>
              : <>
                <p>Pense em um número de <span>1 a 63</span></p>
                <span>e clique me iniciar</span>
                </>
            } 
          </section>
             
          
          </>}
          <Buttons>
            { start 
              ? <>
                  <Button onClick={handleNotSum}>Não</Button> 
                  <Button onClick={handleSum}>Sim</Button> 
                </>
              : <Button onClick={handleStart}>Iniciar</Button> 
            }
          </Buttons>
          <GoogleAds />
          <footer>
            <Footer />
          </footer>
      </Main>
    </Container>
  )
}