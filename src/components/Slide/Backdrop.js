import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';

import {BackdropStyles} from './';

const Backdrop = ({backdrop: {uri}}) => (
    <View style={BackdropStyles.container}>
        <Image
            style={BackdropStyles.image}
            blurRadius={2}
            source={{uri}}
            resizeMode={Image.resizeMode.cover}
        />
    </View>
);

Backdrop.propTypes = {
    backdrop: PropTypes.shape({
        uri: PropTypes.any
    }).isRequired
};

export {Backdrop};