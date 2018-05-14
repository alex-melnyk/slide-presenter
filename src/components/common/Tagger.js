import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {MaterialIcons} from '@expo/vector-icons';

import {Colors} from "../../utils/colors";
import {ScrollView, Text, View} from "react-native";

const Tagger = ({tags}) => (
    <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        contentContainerStyle={styles.container}
    >
        {
            tags.map(({id, name}) => (
                <View
                    key={`genre_${id}`}
                    style={styles.tag}
                >
                    <Text style={styles.tagText}>{name}</Text>
                </View>
            ))
        }
    </ScrollView>
);

Tagger.propTypes = {
    tags: PropTypes.array.isRequired
};

const styles = {
    container: {
        alignItems: 'flex-start'
    },
    tag: {
        marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: Colors.lightGreen,
        borderRadius: 15
    },
    tagText: {
        color: Colors.white
    }
};

export default Tagger;