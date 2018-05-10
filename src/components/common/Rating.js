import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {MaterialIcons} from '@expo/vector-icons';

import {Colors} from "../../utils/colors";

const Rating = ({rating, max = 10, stars = 5}) => {
    const middle = Math.floor(rating / max * stars);

    return [...new Array(stars)].map((e, i) => (
        <MaterialIcons
            key={uuid()}
            name={(middle > i) ? 'star' : (middle === i && middle < rating) ? 'star-half' : 'star-border'}
            size={24}
            color={Colors.yellow}
        />
    ));
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    max: PropTypes.number,
    stars: PropTypes.number,
};

export default Rating;