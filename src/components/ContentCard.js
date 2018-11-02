import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

const ContentCard = (props) => {
    return (
        <Card style={{...props.style, marginBottom:'1rem'}}>
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
