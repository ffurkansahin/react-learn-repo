import { createElement } from "react";

function App() {
  const knowns = ['csharp','rust','react'] 

  const h1 = createElement('h1',{
    className: 'red-and-bold',
    id: 'first-h1'
  },'fsahin.com')

  const ul = createElement('ul',null,knowns.map(known=> createElement('li',null,known)))

  const main = createElement('main',{
    className: 'main',
    id: 'test',
  },h1,ul)

  return (
    <>
    {main}
    </>
  );
}

export default App;
