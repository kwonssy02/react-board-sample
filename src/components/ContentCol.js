import React from 'react';
import { Col } from 'reactstrap';

const ContentCol = (props) => {
    let ContentColStyle = {
        marginBottom: '1rem',
        flewGrow: 'unset'
    };

    if(props.center) {
        ContentColStyle.textAlign = 'center';
    }

    if(props.right) {
        ContentColStyle.textAlign = 'right';
    }

    if(props.block) {
        ContentColStyle.width = '100%';
    }

    return (
        <Col {...props} style={{...props.style, ...ContentColStyle}}>
            {props.children}
        </Col>
    );
};

export default ContentCol;