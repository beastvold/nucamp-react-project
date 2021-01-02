import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// Because this component doesn't change state at all, it can be
//  rendered as a functional component. (As opposed to our Main
//  component that does change state.)

// Displays a single campsite (object) that the user selects: 
//  image, title, description and comments.
function RenderCampsite({campsite}) {
    if (campsite) {
        // Uses ReactStrap Card components to display the campsite
        return (<div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>                
        </div>)
    }
    return (<div />);
}

// Comments about the selected campsite are a part of the campsite object.
//  On medium screens and up, they are displayed to the right of the campsite
//  card. Otherwise, they will stack below.
// Notice how we are able to use "map" to iterate through and display each
//  comment in its own div.
function RenderComments({comments}) {
    if (comments) {
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                { comments.map(comment => { 
                    return (
                        <div>
                            <div>{comment.text}</div>
                            <div>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div>
                            <br />
                        </div>
                    )
                })}
            </div>
        );
    }
    return(<div />);
}

function CampsiteInfo(props) {
    if (props.campsite) {
        // This creates a separate Bootstrap container & row to display
        //  the campsite (if there is one selected)
        return (
            <div className="container">
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.campsite.comments} />
                </div>
            </div>
        );
    }
    return (<div />);
};

export default CampsiteInfo;