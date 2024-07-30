import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  const persons = [
    { first_name: "Jane", second_name: "Doe", age: 45, hair_color: "Black" },
    { first_name: "John", second_name: "Smith", age: 88, hair_color: "Brown" },
    { first_name: "Millard", second_name: "Fillmore", age: 50, hair_color: "Brown" },
    { first_name: "Maria", second_name: "Smith", age: 62, hair_color: "Brown" }
  ];

  return (
    <fieldset>
      <legend>Prop It Up</legend>
      {persons.map((person, index) => (
        <PersonCard key={index} person={person} />
      ))}
    </fieldset>
  );
}

export default App;
