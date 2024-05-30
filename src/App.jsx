import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function App() {
	const [paises, setPaises] = useState([]);

	const conectarApi = async () => {
		try {
			const respuesta = await axios.get('https://restcountries.com/v3.1/all');
      setPaises(respuesta.data);
      console.log(respuesta.data);
		} catch (error) {
			console.log(error);
		}
	};

	conectarApi();

	return (
		<>
			<div className="d-flex justify-content-around flex-wrap m-5">
				{paises.map((pais,i) => (
					<Card key={i} style={{ width: '18rem' }} className="m-4">
						<Card.Img variant="top" src={pais.flags.png} />
						<Card.Body>
							<Card.Title>{pais.name.official}</Card.Title>
							<Card.Text>{pais.continents}</Card.Text>
              <Card.Text>{pais.capital}</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				))}
			</div>
		</>
	);
}

export default App;