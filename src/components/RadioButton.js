import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const horizontalStyles = {
    container: {
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    radio: {

    },
    label: {
        marginLeft: 10,
        color: '#444',
    },
};

const verticalStyles = {
    container: {
        margin: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    radio: {

    },
    label: {
        marginTop: 5,
        color: '#444',
    },
};

const RadioButton = (props) => {
    const { selected, label, vertical, id, touchHandler } = props;

    const renderButton = () => {
        const size = 25;
        const color = '#03A9F4';
        if (selected) {
            return (
                <Icon name="radio-button-checked" size={size} color={color} />
            );
        }
        return (
            <Icon name="radio-button-unchecked" size={size} color={color} />
        );
    };

    let styles = horizontalStyles;
    if (vertical) styles = verticalStyles;

    return (
        <TouchableWithoutFeedback
            onPress={() => { touchHandler(id); }}
        >
            <View style={styles.container}>
                {renderButton()}
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

RadioButton.propTypes = {
    id: React.PropTypes.any.isRequired, // The unique id of this radio button's data
    selected: React.PropTypes.bool, // If the radio button is selected
    label: React.PropTypes.string.isRequired,
    vertical: React.PropTypes.bool, // If the label should be below the radio button
    touchHandler: React.PropTypes.func.isRequired,
};
RadioButton.defaultProps = {
    selected: false,
    vertical: false,
};

export default RadioButton;
