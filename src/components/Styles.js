import {Colors} from "../utils/colors";
import {
    BORDER_RADIUS_LG,
    MOVIE_CONTENT_HEIGHT,
    POSTER_CONTAINER_WIDTH,
    screen,
    SPACE_LG,
    SPACE_SM
} from "../utils/sizes";

const MainStyles = {
    container: {
        flex: 1,
        // justifyContent: 'flex-end'
    },
    backdrop: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: screen.width
    },
    contentBackground: {
        marginHorizontal: SPACE_LG,
        marginTop: screen.height / 3,

        paddingTop: screen.height / 5,

        height: MOVIE_CONTENT_HEIGHT,

        borderRadius: BORDER_RADIUS_LG,
        backgroundColor: Colors.white,

        shadowColor: Colors.black,
        shadowOffset: {width: 0, height: SPACE_SM},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 1
    },
    contentRoller: {
        flex: 1,
        marginHorizontal: SPACE_SM
    },
    posterWrapper: {
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: screen.width
    },
    posterContainer: {
        width: POSTER_CONTAINER_WIDTH,
        overflow: 'visible'
    },
    readMoreButton: {
        backgroundColor: Colors.dark
    },
    readMoreButtonText: {
        backgroundColor: Colors.dark
    }
};

export {
    MainStyles
};