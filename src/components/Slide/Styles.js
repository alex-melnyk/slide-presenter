import {Image} from 'react-native';
import {screen} from "../Styles";
import {Colors} from "../../utils/colors";

import {
    BORDER_RADIUS_LG,
    FONT_SIZE_MD,
    FONT_SIZE_XL,
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
        marginVertical: SPACE_MD,
        alignItems: 'center'
    },
    title: {
        fontSize: FONT_SIZE_XL,
        fontWeight: '800',
        textAlign: 'center',
        color: Colors.dark
    },
    ratingNumber: {
        fontSize: FONT_SIZE_MD,
        fontWeight: '400',
        marginVertical: SPACE_SM
    },
    ratingControl: {
        marginBottom: SPACE_MD
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
        width: screen.width
    },
    content: {
        marginTop: SPACE_LG2,
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