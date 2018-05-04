import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import {BlurView} from "expo";

import {BackdropStyles} from './';

const Backdrop = ({backdrop: {uri}}) => (
    <BlurView style={BackdropStyles.container}>
        <Image
            style={BackdropStyles.image}
            source={{uri}}
            resizeMode={Image.resizeMode.cover}
        />
    </BlurView>
);

Backdrop.propTypes = {
    backdrop: PropTypes.shape({
        uri: PropTypes.any
    }).isRequired
};

export {Backdrop};