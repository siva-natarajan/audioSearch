import React from 'react';
import './app.css';
import Footer from './footer';
import Header from './header';
import HomePage from './homePage';
import Table from 'react-bootstrap/Table';

const App = () => {
  return (
    <div className="pageContainer">
      <Header />
      <div className="content">
        <HomePage />
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Footer />
    </div>
  );
};

export default App;
