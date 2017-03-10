import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    label: {
        marginLeft: 4,
    },
    labelContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    required: {
        marginLeft: 5,
        fontSize: 12,
        fontStyle: 'italic',
    },
});

const Label = (props) => {
    const errorLabelStyle = props.error ? { color: 'red' } : null;

    return (
        <View style={styles.labelContainer}>
            <Text style={[styles.label, errorLabelStyle]}>{props.label.toUpperCase()}</Text>
            {props.required ?
                <Text style={[styles.required, errorLabelStyle]}>(Required)</Text>
                :
                null
            }
        </View>
    );
};

Label.propTypes = {
    label: React.PropTypes.string.isRequired,
    required: React.PropTypes.bool.isRequired,
    error: React.PropTypes.bool.isRequired,
};

export default Label;
