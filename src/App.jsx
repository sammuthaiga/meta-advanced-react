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
const topStudents = data.map(student => {
  return {
      info: `${student.name} - ${student.description}`,
      age: student.age,
  }
}) 

export default function App() {
  console.log(topStudents);
}