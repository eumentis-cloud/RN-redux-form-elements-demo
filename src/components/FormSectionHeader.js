import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    formSectionHeader: {
        backgroundColor: '#ddd',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const FormSectionHeader = (props) => {
    const { title } = props;

    return (
        <View style={styles.formSectionHeader}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

FormSectionHeader.propTypes = {
    title: React.PropTypes.string.isRequired,
};

export default FormSectionHeader;
