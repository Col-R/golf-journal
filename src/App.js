import './App.css';

// components
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'

// data
import cardData from './data'

function App() {
  const courses = cardData.map(course => {
    return <Card 
    key = {course.id}
    course = {course}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <section className="cards">
        {courses}
      </section>
      <Footer />
    </div>
  );
}

export default App;
