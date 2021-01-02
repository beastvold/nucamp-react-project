import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

// Because this component doesn't change state at all, it can be
//  rendered as a functional component. (As opposed to our Main
//  component that does change state.)

function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

function Directory(props) {
    // The "directory" variable takes the JS array of campsite objects and uses
    //  the map method to turn it into an array of JSX. The JSX here uses Card
    //  elements from ReactStrap.
    // React uses keys to uniquely identify lists of elements. This key is used
    //  to identify which element is clicked on by the onClick method.
    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });

    // JSX has built in functionality for rendering collections of elements in
    //  an array. JSX will properly display each campsite in the directory inline.
    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;