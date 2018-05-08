import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import PropTypes from 'prop-types';

import {contentWidth, MainStyles, screen} from "./Styles";
import {Backdrop, Content, Poster} from "./Slide";
import {SPACE_LG2} from "../utils/sizes";
import Header from "./common/Header";

class Main extends Component {
    backPressed = () => {
        console.log('Back pressed!');
    };

    readMorePressed = ({item}) => {
        console.log('PRESSED', item);
    };

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
                onReadMore={this.readMorePressed}
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
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        removeClippedSubviews={true}
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
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            removeClippedSubviews={true}
                            scrollEnabled={false}
                        >
                            {this.renderContents(items)}
                        </ScrollView>
                    </View>
                </View>

                <View style={MainStyles.posterWrapper}>
                    <ScrollView
                        style={{
                            alignSelf: 'center',
                            width: screen.width - 80,
                            overflow: 'visible'
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        removeClippedSubviews={true}
                        pagingEnabled={true}
                        scrollEventThrottle={16}
                        onScroll={(e) => {
                            if (e.nativeEvent.contentOffset.x >= 0 && e.nativeEvent.contentOffset.x < (screen.width - 80) * (items.length - 1)) {
                                this.scrollBack.scrollTo({
                                    x: e.nativeEvent.contentOffset.x / (screen.width - 80) * screen.width
                                });

                                this.scrollCont.scrollTo({
                                    x: e.nativeEvent.contentOffset.x / (screen.width - 80) * (contentWidth + SPACE_LG2)
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