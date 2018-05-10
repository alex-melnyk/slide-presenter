import {Colors} from "../utils/colors";
import {
    BORDER_RADIUS_LG,
    MOVIE_CONTENT_HEIGHT,
    MOVIE_CONTENT_WIDTH,
    POSTER_CONTAINER_WIDTH,
    screen,
    SPACE_LG, SPACE_LG2,
    SPACE_MD,
    SPACE_SM
} from "../utils/sizes";

const MainStyles = {
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    backdrop: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: screen.width
    },
    contentWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        width: screen.width,
        marginBottom: SPACE_LG
    },
    contentBackground: {
        marginHorizontal: SPACE_LG,
        paddingTop: screen.height / 6,
        paddingBottom: SPACE_MD,
        height: MOVIE_CONTENT_HEIGHT, // 3\5
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
    contentItem: {
        width: MOVIE_CONTENT_WIDTH - SPACE_LG2
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