import {Dimensions} from 'react-native';
import {Colors} from "../utils/colors";
import {BORDER_RADIUS_LG, SPACE_LG, SPACE_LG2, SPACE_MD, SPACE_MD2, SPACE_SM} from "../utils/sizes";

export const screen = Dimensions.get('screen');
export const contentWidth = (screen.width - SPACE_LG2 - SPACE_MD2 - SPACE_MD2);

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
        paddingTop: 120,
        height: screen.height / 5 * 3,
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
        marginHorizontal: SPACE_SM,
        marginBottom: SPACE_MD
    },
    contentItem: {
        width: contentWidth
    },
    posterWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: screen.width
    },

};

export {
    MainStyles
};