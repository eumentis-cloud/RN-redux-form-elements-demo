import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    form: {
        padding: 20,
    },
});

const Form = (props) => (
    <View style={styles.form} {...props} />
);

Form.propTypes = {
    ...View.propTypes,
};

export default Form;
