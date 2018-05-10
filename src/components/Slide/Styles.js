import {Image} from 'react-native';
import {Colors} from "../../utils/colors";
import {
    BORDER_RADIUS_LG,
    FONT_SIZE_LG,
    FONT_SIZE_MD, POSTER_CONTAINER_HEIGHT,
    POSTER_CONTAINER_WIDTH,
    screen,
    SPACE_LG,
    SPACE_SM,
    SPACE_XS
} from "../../utils/sizes";

const BackdropStyles = {
    container: {
        flex: 1
    },
    image: {
        width: screen.width,
        height: screen.height,
        resizeMode: Image.resizeMode.cover
    }
};

const ContentStyles = {
    container: {
        flex: 1,
        marginHorizontal: SPACE_LG,
        alignItems: 'center'
    },
    title: {
        fontSize: FONT_SIZE_LG,
        fontWeight: '600',
        textAlign: 'center',
        color: Colors.dark
    },
    ratingControl: {
        marginVertical: SPACE_XS,
        flexDirection: 'row',
        height: 24
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACE_SM
    },
    ratingNumber: {
        fontSize: FONT_SIZE_MD,
        fontWeight: '600',
        marginLeft: SPACE_XS
    },
    overviewWrapper: {
        flex: 1
    },
    overviewContent: {
        fontSize: FONT_SIZE_MD,
        textAlign: 'center'
    }
};

const PosterStyles = {
    container: {
        marginTop: screen.height / 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: POSTER_CONTAINER_WIDTH,
        height: POSTER_CONTAINER_HEIGHT,
        shadowColor: Colors.black,
        shadowOffset: {width: 0, height: SPACE_SM},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2
    },
    poster: {
        position: 'absolute',
        borderRadius: BORDER_RADIUS_LG
    }
};

export {
    BackdropStyles,
    ContentStyles,
    PosterStyles
};