import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = {
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomColor: '#999',
        borderBottomWidth: 1,
    },
    itemText: {
        color: '#333',
    },
};

const SelectListItem = (props) => {
    const { text, selected, onPress, id } = props;

    let bgColor = { backgroundColor: '#fff' };
    if (selected) bgColor = { backgroundColor: '#d8dbdd' };

    return (
        <TouchableNativeFeedback
            onPress={() => {
                onPress(id);
            }}
            background={TouchableNativeFeedback.SelectableBackground()}
        >
            <View style={[styles.itemContainer, bgColor]}>
                <Text style={styles.itemText}>{text}</Text>
                { selected ?
                    <Icon name="check-circle" size={20} color="#03A9F4" />
                    :
                    null
                }
            </View>
        </TouchableNativeFeedback>
    );
};

SelectListItem.propTypes = {
    id: React.PropTypes.any.isRequired,  // The id of item in the list
    text: React.PropTypes.string.isRequired,    // The text to be displayed
    selected: React.PropTypes.bool,
    onPress: React.PropTypes.func.isRequired,
};
SelectListItem.defaultProps = {
    selected: false,
};

export default SelectListItem;
