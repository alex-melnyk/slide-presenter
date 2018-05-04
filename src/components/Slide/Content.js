import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import Rating from 'react-native-easy-rating';

import {ContentStyles} from './';

const Content = (item, style) => (
    <View style={[ContentStyles.container, style]}>
        <Text style={ContentStyles.title}>
            {item.title}
        </Text>
        <Text style={ContentStyles.ratingNumber}>
            {item.votes}
        </Text>
        <Rating
            style={ContentStyles.ratingControl}
            rating={item.votes}
            max={10}
            iconWidth={24}
            iconHeight={24}
            editable={false}
            onRate={(rating) => {
            }}
        />
        <ScrollView style={ContentStyles.overviewWrapper}>
            <Text style={ContentStyles.overviewContent}>
                {item.overview}
            </Text>
        </ScrollView>
    </View>
);

Content.propTypes = {
    item: PropTypes.object.isRequired
};

export {Content};