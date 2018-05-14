import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {MaterialIcons} from '@expo/vector-icons';

import {Colors} from "../../utils/colors";
import {View} from "react-native";

const Rating = ({rating, size = 24, max = 10, stars = 5}) => {
    const middle = Math.floor(rating / max * stars);

    const icons = [...new Array(stars)].map((e, i) => (
        <MaterialIcons
            key={uuid()}
            name={(middle > i) ? 'star' : (middle === i && middle < rating) ? 'star-half' : 'star-border'}
            size={size}
            color={Colors.yellow}
        />
    ));

    return (
        <View style={{flexDirection: 'row'}}>
            {icons}
        </View>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    max: PropTypes.number,
    stars: PropTypes.number,
};

export default Rating;