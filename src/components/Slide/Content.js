import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import {BORDER_RADIUS_SM, SPACE_SM, SPACE_XS} from "../../utils/sizes";
import {Colors} from "../../utils/colors";
import {ContentStyles} from './';

import Rating from "../common/Rating";

class Content extends Component {
    render() {
        const {
            item,
            style,
            onReadMore
        } = this.props;

        return (
            <View style={[ContentStyles.container, style]}>
                <Text style={ContentStyles.title}>
                    {item.title}
                </Text>
                <View style={ContentStyles.ratingControl}>
                    <Rating rating={item.voteAverage} />
                </View>
                <View style={ContentStyles.ratingWrapper}>
                    <MaterialIcons
                        name="stars"
                        size={24}
                    />
                    <Text style={ContentStyles.ratingNumber}>
                        {item.voteAverage}/
                    </Text>
                    <MaterialIcons
                        name="people"
                        size={24}
                    />
                    <Text style={ContentStyles.ratingNumber}>
                        {item.voteCount}
                    </Text>
                </View>
                <ScrollView style={ContentStyles.overviewWrapper}>
                    <Text style={ContentStyles.overviewContent}>
                        {item.overview}
                    </Text>
                </ScrollView>
                <View style={{
                    marginTop: SPACE_SM,
                    justifyContent: 'flex-end',
                    width: '100%',
                }}>
                    <TouchableOpacity
                        onPress={() => onReadMore && onReadMore({item})}
                        style={{
                            paddingVertical: SPACE_XS,
                            paddingHorizontal: SPACE_SM,
                            borderRadius: BORDER_RADIUS_SM,
                            backgroundColor: Colors.yellow
                        }}
                    >
                        <Text style={{
                            textAlign: 'center',
                            color: Colors.white
                        }}>Read more...</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

Content.propTypes = {
    item: PropTypes.object.isRequired,
    onReadMore: PropTypes.func.isRequired
};

export {Content};