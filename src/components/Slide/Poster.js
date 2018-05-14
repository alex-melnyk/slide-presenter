import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, Image, View} from 'react-native';

import {POSTER_IMAGE_HEIGHT} from '../../utils/sizes';
import {PosterStyles} from './';

const Poster = ({style, poster: {uri, width, height}}) => (
    <Animated.View style={[PosterStyles.container, style]}>
        <Image
            style={[PosterStyles.poster, {
                width: POSTER_IMAGE_HEIGHT / height * width,
                height: POSTER_IMAGE_HEIGHT
            }]}
            resizeMode={Image.resizeMode.contain}
            source={{uri}}
        />
    </Animated.View>
);

Poster.propTypes = {
    poster: PropTypes.shape({
        uri: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired
    }).isRequired
};

export {Poster};