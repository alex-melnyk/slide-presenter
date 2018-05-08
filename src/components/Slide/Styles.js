import {Image} from 'react-native';
import {screen} from "../Styles";
import {Colors} from "../../utils/colors";

import {
    BORDER_RADIUS_LG,
    FONT_SIZE_LG,
    FONT_SIZE_MD,
    SPACE_LG,
    SPACE_LG2,
    SPACE_MD,
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
        alignItems: 'center',
        width: screen.width - 80
    },
    content: {
        marginTop: SPACE_LG2 + SPACE_MD,
        marginBottom: SPACE_LG2,
        shadowColor: Colors.black,
        shadowOffset: {width: 0, height: SPACE_XS},
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 2
    },
    poster: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: BORDER_RADIUS_LG,
        overflow: 'hidden'
    }
};

export {
    BackdropStyles,
    ContentStyles,
    PosterStyles
};