import logo from "./logo.svg"
import styles from "./App.module.css"
import Test from "./Test"
import { Title } from "./Components";
import { Bootstrap } from "./Boootstrap";
import "./style.scss"

function Style(){
    return(
        <>
    <Title>
      <Test />
    </Title>
    <Title theme='dark'>
      Theme Dark And Hover Test
    </Title>
    <Bootstrap></Bootstrap>
    <div className="sassTest">Sass test
      <button>
        button
      </button>
    </div>

    <div className={styles.App}>
      First Web Page With React
      <img src='/logo192.png'></img>
      <img src={logo}></img>
    </div>
    </>
    )
}

export default Style