import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    error: {
        marginLeft: 5,
        color: 'red',
    },
});

const ErrorText = (props) => {
    const { errorText } = props;

    if (errorText) {
        return (
            <Text style={styles.error}>{errorText}</Text>
        );
    }

    return null;
};

ErrorText.propTypes = {
    errorText: React.PropTypes.string.isRequired,
};

export default ErrorText;
