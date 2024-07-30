import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  const persons = [
    { first_name: "Jane",
      second_name: "Doe",
      age: 45,
      hair_color: "Black"
    },
    { first_name: "John",
      second_name: "Smith",
      age: 88,
      hair_color: "Brown"
    }];
  return (
    <fieldset>
      <legend>Putting it together</legend>
        <PersonCard first_name = {persons[0].first_name} last_name = {persons[0].second_name} age = {persons[0].age} hair_color ={persons[0].hair_color} />
        <PersonCard first_name = {persons[1].first_name} last_name = {persons[1].second_name} age = {persons[1].age} hair_color ={persons[1].hair_color} />
    </fieldset>
  );
}

export default App;
