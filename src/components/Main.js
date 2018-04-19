import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';

import {contentWidth, MainStyles, screen} from "./Styles";
import {Backdrop, Content, Poster} from "./Slide";
import {SPACE_LG2} from "../utils/sizes";

class Main extends Component {
    renderBackdrops = (items) =>
        items.map((item) => (
            <Backdrop
                key={item.key}
                backdrop={item.backdrop}
            />
        ));

    renderContents = (items) =>
        items.map((item) => (
            <Content
                key={item.key}
                item={item}
                style={MainStyles.contentItem}
            />
        ));

    renderPosters = (items) =>
        items.map((item) => (
            <Poster
                key={item.key}
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
                        showsHorizontalScrollIndicator={false}
                        removeClippedSubviews={true}
                        horizontal={true}
                        scrollEnabled={false}
                    >
                        {this.renderBackdrops(items)}
                    </ScrollView>
                </View>

                <View style={MainStyles.contentWrapper}>
                    <View style={MainStyles.contentBackground}>
                        <ScrollView
                            ref={(ref) => this.scrollCont = ref}
                            style={MainStyles.contentRoller}
                            showsHorizontalScrollIndicator={false}
                            removeClippedSubviews={true}
                            horizontal={true}
                            scrollEnabled={false}
                        >
                            {this.renderContents(items)}
                        </ScrollView>
                    </View>
                </View>

                <View style={MainStyles.posterWrapper}>
                    <ScrollView
                        scrollEventThrottle={16}
                        horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        removeClippedSubviews={true}
                        onScroll={(e) => {
                            this.scrollBack.scrollTo(e.nativeEvent.contentOffset);

                            this.scrollCont.scrollTo({
                                x: e.nativeEvent.contentOffset.x / screen.width * (contentWidth + SPACE_LG2)
                            });
                        }}
                    >
                        {this.renderPosters(items)}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

Main.propTypes = {
    items: PropTypes.array,
    getNowPlaying: PropTypes.func.isRequired
};

export default Main;