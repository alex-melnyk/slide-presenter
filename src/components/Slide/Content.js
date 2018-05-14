import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

import {BORDER_RADIUS_SM, SPACE_SM, SPACE_XS} from "../../utils/sizes";
import {Colors} from "../../utils/colors";
import {ContentStyles} from './';

import Rating from "../common/Rating";
import Tagger from "../common/Tagger";

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
                    <Rating
                        rating={item.voteAverage}
                        size={24}
                    />
                    <Text style={ContentStyles.ratingNumber}>
                        {item.voteAverage}
                    </Text>
                </View>
                <View style={ContentStyles.shortDetailsWrapper}>
                    <View style={ContentStyles.shortDetails}>
                        <MaterialIcons
                            name="access-time"
                            size={16}
                            color={Colors.darkGray}
                        />
                        <Text style={ContentStyles.shortDetailsText}>
                            {item.runtime} min
                        </Text>
                    </View>
                    <View style={ContentStyles.shortDetails}>
                        <MaterialCommunityIcons
                            name="movie-roll"
                            size={16}
                            color={Colors.darkGray}
                        />
                        <Text style={ContentStyles.shortDetailsText}>
                            {item.release}
                        </Text>
                    </View>
                </View>
                <Tagger tags={item.genres} />
                <View style={{
                    marginTop: SPACE_SM,
                    justifyContent: 'flex-end',
                    width: '100%',
                }}>
                    <TouchableOpacity
                        onPress={() => onReadMore && onReadMore({item})}
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <MaterialCommunityIcons
                            name="chevron-down"
                            size={24}
                            color={Colors.darkGray}
                        />
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