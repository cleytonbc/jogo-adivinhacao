import { useSum } from "../../TotalContext"
import { Container, Number, Table } from "./styled"

interface GameProps {
  listNum: number[]
}

export function Game({listNum}:GameProps){
  return (
    <Container>
      <Table>
        {listNum.map(n=> {
          return (<Number key={n}>{n}</Number>)
        })}
      </Table>
      <div>O número que você penso está nessa lista?</div>
    </Container>
  )
}