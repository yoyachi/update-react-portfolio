import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Project(props) {
    console.log(props.work,"props")
	// This imports the information for the current project sent down.
	const currentProject = props.work 

	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const techs = currentProject.technologies;
	const gitLink = currentProject.github;
    const appLink = currentProject.deployed;

	// This function parses the information from the array and creates a list.
	function getTechs(techArray) {
		let techList = "";

		for (var i = 0; i < techArray.length; i++) {
			if (i === techArray.length - 1) {
				techList += techArray[i];
			} else {
				techList += techArray[i] + ", ";
			}
		}

		return techList;
	}

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={`images/${image}`}
				className="card-image"
			/>
			<div className="center">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Text className="card-text">{description}</Card.Text>
					<Card.Subtitle className="card-subtitle">Techs Used</Card.Subtitle>
					<Card.Text className="card-techs">{getTechs(techs)}</Card.Text>
					<Card.Link href={appLink} target="_blank" className="card-link">
						{name} App
					</Card.Link>
					<br></br>
					<Card.Link href={gitLink} target="_blank" className="card-link">
						{name} Github
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;

/*function Project(props) {
    console.log(props.work,"--")
    
    return (<div className="card" style="width: 18rem;">
        <img   className="card-img-top" alt="..." />
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>)
}
*/



