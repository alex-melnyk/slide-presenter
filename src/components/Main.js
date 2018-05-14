import React, {Component} from 'react';
import {Animated, ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';
import posed from 'react-native-pose';

import {MainStyles} from "./Styles";
import {Backdrop, Content, Poster} from "./Slide";
import {MOVIE_CONTENT_HEIGHT, MOVIE_CONTENT_WIDTH, POSTER_CONTAINER_WIDTH, screen, SPACE_LG} from "../utils/sizes";
import {Header} from "./common";

const PoseContainer = posed()({
    collapse: {
        containerHMargin: SPACE_LG,
        containerVMargin: screen.height / 3,
        containerHeight: MOVIE_CONTENT_HEIGHT,
        posterOpacity: 1,
        singlePosterTX: 0,
        singlePosterTY: 0,
        singlePosterScale: 1
    },
    expand: {
        containerHMargin: 0,
        containerVMargin: screen.height / 4,
        containerHeight: screen.height - screen.height / 4,
        posterOpacity: 0,
        singlePosterTX: -100,
        singlePosterTY: -50,
        singlePosterScale: 0.5
    }
});

class Main extends Component {
    state = {
        pose: 'collapse',
        selected: null
    };

    backPressed = () => {
        console.log('Back pressed!');
    };

    readMorePressed = ({item}) => {
        this.setState({
            pose: this.state.pose === 'collapse'
                ? 'expand'
                : 'collapse',
            selected: this.state.pose === 'collapse'
                ? item
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
                open={this.state.selected && this.state.selected.id === item.id}
                onReadMore={this.readMorePressed}
            />
        ));

    renderPosters = (items) =>
        items.map((item) => (
            <Poster
                key={`poster_${item.id}`}
                poster={item.poster}
                style={{
                    opacity: !this.state.selected ? 1 : 0
                }}
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
                    <PoseContainer pose={this.state.pose}>
                        {
                            ({posterOpacity}) => (
                                <Animated.ScrollView
                                    style={[MainStyles.posterContainer, {
                                        opacity: posterOpacity
                                    }]}
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
                                </Animated.ScrollView>
                            )
                        }
                    </PoseContainer>
                    {
                        this.state.selected &&
                        <PoseContainer initialPose={'collapse'} pose={this.state.pose}>
                            {
                                ({singlePosterTX, singlePosterTY, singlePosterScale}) => (
                                    <Poster
                                        style={{
                                            position: 'absolute',
                                            transform: [
                                                {translateX: singlePosterTX},
                                                {translateY: singlePosterTY},
                                                {scaleX: singlePosterScale},
                                                {scaleY: singlePosterScale},
                                            ]
                                        }}
                                        poster={this.state.selected.poster}
                                    />
                                )
                            }
                        </PoseContainer>
                    }
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