import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert, Breadcrumb, Card} from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <Card.Img src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg"/>
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is an example of react bootstrap cards</Card.Text>
            <Button variant='primary'>...read more</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test 1</Breadcrumb.Item>
          <Breadcrumb.Item>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='success'>This is a Button</Alert>
        <Button>Test Button</Button>    
      </header>
    </div>
  );
}

export default App;
