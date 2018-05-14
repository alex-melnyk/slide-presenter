import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import posed from 'react-native-pose';

import {MOVIE_CONTENT_WIDTH, SPACE_LG2, SPACE_SM} from "../../utils/sizes";
import {Colors} from "../../utils/colors";
import {ContentStyles} from './';

import {Rating, Tagger} from "../common";

const PoseContainer = posed()({
    collapse: {
        contentWidth: MOVIE_CONTENT_WIDTH - SPACE_LG2,
        overviewHeight: 0,
        overviewOpacity: 0
    },
    expand: {
        contentWidth: MOVIE_CONTENT_WIDTH,
        overviewHeight: -1,
        overviewOpacity: 1
    }
});

class Content extends Component {
    render() {
        const {
            item,
            onReadMore,
            open
        } = this.props;

        return (
            <PoseContainer>
                {({contentWidth, overviewHeight, overviewOpacity}) => (
                    <Animated.ScrollView scrollEnabled={open}>
                        <Animated.View style={[ContentStyles.container, {
                            width: contentWidth
                        }]}>
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
                            <Animated.View style={{
                                height: overviewHeight,
                                opacity: overviewOpacity,
                            }}>
                                <Text>{item.overview}</Text>
                            </Animated.View>
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
                        </Animated.View>
                    </Animated.ScrollView>
                )}
            </PoseContainer>
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