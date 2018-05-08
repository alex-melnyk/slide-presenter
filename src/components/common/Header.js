import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {Colors} from "../../utils/colors";
import {SPACE_MD} from "../../utils/sizes";

const Header = ({title, canBack, onBack}) => {
    return (
        <SafeAreaView style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%'
        }}>
            <View style={{
                paddingHorizontal: SPACE_MD,
                flexDirection: 'row'
            }}>
                <View style={{
                    width: 24,
                    justifyContent: 'center'
                }}>
                    {
                        canBack &&
                        <TouchableOpacity
                            onPress={() => onBack && onBack()}
                        >
                            <Ionicons
                                name="ios-arrow-back"
                                color={Colors.white}
                                size={24}
                            />
                        </TouchableOpacity>
                    }
                </View>
                <Text style={{
                    flex: 1,
                    fontSize: 18,
                    fontWeight: '600',
                    color: Colors.white,
                    textAlign: 'center'
                }}>{title}</Text>

                <View style={{
                    width: 24,
                    justifyContent: 'center'
                }}>
                    <MaterialCommunityIcons
                        name="dots-vertical"
                        color={Colors.white}
                        size={24}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    canBack: PropTypes.bool,
    onBack: PropTypes.func
};

export default Header;