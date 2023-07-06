const data = [
  {
      id: "1",
      name: "Mark",
      description: "Tall and handsome",
      age: "27"

  },
  {
      id: "1",
      name: "Sam",
      description: "Short and hardworking",
      age: "29"
  },
  {
      id: "1",
      name: "Rob",
      description: "Average and funny",
      age: "30"
  }
];
function App() {
  const topStudents = data.map(student => {
    const studentInfo = `${student.name} - ${student.description}`
    // eslint-disable-next-line react/jsx-key
    return <li>{studentInfo}</li>
  }) 
  return (
    <div>
      <ul>
        {topStudents}
      </ul>
    </div>
  )
}

export default App