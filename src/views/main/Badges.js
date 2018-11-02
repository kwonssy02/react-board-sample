import React, { Component } from 'react';
import { Badge, Row, Col } from 'reactstrap';
import ContentCard from 'components/ContentCard';

class Badges extends Component {
    render() {
        return (
            <div>
                <ContentCard title="Badges">
                    <Row>
                        <Col>
                            <Badge color="primary">Primary</Badge>{' '}
                            <Badge color="secondary">Secondary</Badge>{' '}
                            <Badge color="success">Success</Badge>{' '}
                            <Badge color="danger">Danger</Badge>{' '}
                            <Badge color="warning">Warning</Badge>{' '}
                            <Badge color="info">Info</Badge>{' '}
                            <Badge color="light">Light</Badge>{' '}
                            <Badge color="dark">Dark</Badge>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Badge color="primary" pill>Primary</Badge>{' '}
                            <Badge color="secondary" pill>Secondary</Badge>{' '}
                            <Badge color="success" pill>Success</Badge>{' '}
                            <Badge color="danger" pill>Danger</Badge>{' '}
                            <Badge color="warning" pill>Warning</Badge>{' '}
                            <Badge color="info" pill>Info</Badge>{' '}
                            <Badge color="light" pill>Light</Badge>{' '}
                            <Badge color="dark" pill>Dark</Badge>
                        </Col>
                    </Row>
                </ContentCard>
            </div>
        );
    }
}

export default Badges;