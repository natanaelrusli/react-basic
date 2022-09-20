import ExpenseItem from './components/ExpenseItem'

function App() {
  // here is how you add a paragraph into a div using vanilla JS
  // const para = document.createElement('p')
  // para.textContent = 'This is also visible!'
  // document.getElementById('root').append(para)

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem />
    </div>
  );
}

export default App;
