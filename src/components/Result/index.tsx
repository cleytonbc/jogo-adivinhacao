import { useEffect, useState } from "react";
import { GiMagickTrick } from 'react-icons/gi';
import { Container} from "./styles"

interface resultProps {
  result: number;
}

export function Result( {result}:resultProps ){
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 500)
  }, [show])

  
  return (
    
    <Container>
      { show ? <p>O número que você pensou é <span>{result}</span></p>
        : <h1><GiMagickTrick size={200} /></h1>
      }
      
    </Container>
  )
}