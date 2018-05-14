import React, {Component} from 'react';
import {Animated, ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';
import posed from 'react-native-pose';

import {MainStyles} from "./Styles";
import {Backdrop, Content, Poster} from "./Slide";
import {
    MOVIE_CONTENT_HEIGHT,
    MOVIE_CONTENT_WIDTH,
    POSTER_CONTAINER_WIDTH,
    screen,
    SPACE_LG,
    SPACE_LG2
} from "../utils/sizes";
import {Header} from "./common";

const PoseContainer = posed()({
    collapse: {
        containerHMargin: SPACE_LG,
        containerVMargin: screen.height / 3,
        containerHeight: MOVIE_CONTENT_HEIGHT,
    },
    expand: {
        containerHMargin: 0,
        containerVMargin: screen.height / 5,
        containerHeight: screen.height - screen.height / 5,
    }
});

class Main extends Component {
    state = {
        pose: 'collapse',
        openId: null
    };

    backPressed = () => {
        console.log('Back pressed!');
    };

    readMorePressed = ({item}) => {
        this.setState({
            pose: this.state.pose === 'collapse'
                ? 'expand'
                : 'collapse',
            openId: this.state.pose === 'collapse'
                ? item.id
                : null
        });


    };

    renderBackdrops = (items) =>
        items.map((item) => (
            <Backdrop
                key={`backdrop_${item.id}`}
                backdrop={item.backdrop}
            />
        ));

    renderContents = (items) =>
        items.map((item) => (
            <Content
                key={`content_${item.id}`}
                item={item}
                open={item.id === this.state.openId}
                onReadMore={this.readMorePressed}
            />
        ));

    renderPosters = (items) =>
        items.map((item) => (
            <Poster
                key={`poster_${item.id}`}
                poster={item.poster}
            />
        ));

    componentDidMount() {
        this.props.getNowPlaying();
    }

    render() {
        const {
            items
        } = this.props;

        return (
            <View style={MainStyles.container}>
                <View style={MainStyles.backdrop}>
                    <ScrollView
                        ref={(ref) => this.scrollBack = ref}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        removeClippedSubviews={true}
                        scrollEnabled={false}
                    >
                        {this.renderBackdrops(items)}
                    </ScrollView>
                </View>

                <PoseContainer pose={this.state.pose}>
                    {
                        ({containerHMargin, containerVMargin, containerHeight}) => (
                            <Animated.View style={[MainStyles.contentBackground, {
                                marginHorizontal: containerHMargin,
                                marginTop: containerVMargin,
                                height: containerHeight
                            }]}>
                                <ScrollView
                                    ref={(ref) => this.scrollCont = ref}
                                    style={MainStyles.contentRoller}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                    removeClippedSubviews={true}
                                    scrollEnabled={false}
                                >
                                    {this.renderContents(items)}
                                </ScrollView>
                            </Animated.View>
                        )
                    }
                </PoseContainer>

                <View style={MainStyles.posterWrapper}>
                    <ScrollView
                        style={MainStyles.posterContainer}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        removeClippedSubviews={true}
                        pagingEnabled={true}
                        scrollEventThrottle={16}
                        onScroll={(e) => {
                            if (e.nativeEvent.contentOffset.x >= 0 && e.nativeEvent.contentOffset.x < (screen.width - 80) * (items.length - 1)) {
                                this.scrollBack.scrollTo({
                                    x: e.nativeEvent.contentOffset.x / (POSTER_CONTAINER_WIDTH - 0.25) * screen.width
                                });

                                this.scrollCont.scrollTo({
                                    x: e.nativeEvent.contentOffset.x / POSTER_CONTAINER_WIDTH * MOVIE_CONTENT_WIDTH
                                });
                            }
                        }}
                    >
                        {this.renderPosters(items)}
                    </ScrollView>
                </View>

                <Header
                    title="Find"
                    canBack={false}
                    onBack={this.backPressed}
                />
            </View>
        );
    }
}

Main.propTypes = {
    items: PropTypes.array,
    getNowPlaying: PropTypes.func.isRequired
};

export default Main;