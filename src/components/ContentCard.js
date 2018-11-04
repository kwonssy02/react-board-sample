import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

const ContentCard = (props) => {
    let ContentCardStyle = {
        marginBottom:'1rem'
    };

    let ContentCardProp = {

    };

    if(props.inverse) {
        ContentCardProp.inverse = true;
    }

    if(props.backgroundColor) {
        ContentCardStyle.backgroundColor = props.backgroundColor;
    }

    if(props.borderColor) {
        ContentCardStyle.borderColor = props.borderColor;
    }

    return (
        <Card {...ContentCardProp} style={{...props.style, ...ContentCardStyle}}>
            {props.title !== undefined ? 
            <CardHeader style={{background: '#F0F3F5'}}>
                {props.title}
            </CardHeader>
            : null
            }
            <CardBody>
                {props.children}
            </CardBody>
        </Card>
    );
};

export default ContentCard;
