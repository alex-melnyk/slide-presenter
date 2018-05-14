import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

import {SPACE_SM} from "../../utils/sizes";
import {Colors} from "../../utils/colors";
import {ContentStyles} from './';

import {Rating, Tagger} from "../common";

class Content extends Component {
    render() {
        const {
            item,
            style,
            onReadMore
        } = this.props;

        console.log(item.genres);

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
                <Tagger tags={item.genres}/>
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
    item: PropTypes.shape({
        title: PropTypes.string,
        voteAverage: PropTypes.number,
        runtime: PropTypes.number,
        release: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })),
    }).isRequired,
    onReadMore: PropTypes.func
};

export {Content};