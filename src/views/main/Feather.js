import React, { Component } from 'react';
import * as FeatherIcons from 'react-icons/fi';


import ContentCard from 'components/ContentCard';
import ContentCol from 'components/ContentCol';
import ContentRow from 'components/ContentRow';
import _ from 'lodash';

const FeatherIconComponent = ((props) => {
    const FeatherIcon = FeatherIcons[props.icon];
    return (
        <FeatherIcon size={25}/>
    )
});

class Icons extends Component {
    render() {
        const featherIconList = _.sortBy(Object.keys(FeatherIcons));
        return (
            <div>
                <ContentCard title={'Feather Icons'}>
                    <ContentRow>
                        {featherIconList.map((icon, key) => {
                            return (
                                <ContentCol center xl={2} lg={2} xs={3} key={key}>
                                    <FeatherIconComponent icon={icon} />
                                    <p style={{fontSize:'.9rem'}}>{icon}</p>
                                </ContentCol>
                            )
                        })}
                    </ContentRow>
                </ContentCard>
            </div>
        );
    }
}

export default Icons;