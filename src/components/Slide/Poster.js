import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, View} from 'react-native';

import {POSTER_IMAGE_HEIGHT} from '../../utils/sizes';
import {PosterStyles} from './';

const Poster = ({poster: {uri, width, height}}) => (
    <View style={PosterStyles.container}>
        <Image
            style={[PosterStyles.poster, {
                width: POSTER_IMAGE_HEIGHT / height * width,
                height: POSTER_IMAGE_HEIGHT
            }]}
            resizeMode={Image.resizeMode.contain}
            source={{uri}}
        />
    </View>
);

Poster.propTypes = {
    poster: PropTypes.shape({
        // uri: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    }).isRequired
};

export {Poster};