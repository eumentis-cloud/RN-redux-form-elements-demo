import React from 'react';
import { TextInput, View } from 'react-native';

import Label from './Label';
import ErrorText from './ErrorText';

const styles = {
    container: {
        margin: 10,
    },
};

const Input = (props) => {
    const { label, data, handler, name, type, required } = props;

    // Keyboard type
    let keyboardType = 'default';
    if (type === 'number') keyboardType = 'numeric';
    if (type === 'email') keyboardType = 'email-address';

    return (
        <View style={styles.container}>
            <Label label={label} error={data.error ? true : false} required={required} />
            <TextInput
                value={data.value}
                onChangeText={(value) => {
                    handler({
                        valueChanged: true,
                        fieldName: name,
                        value,
                    });
                }}
                onBlur={() => {
                    handler({
                        validate: true,
                        fieldName: name,
                        value: data.value,
                    });
                }}
                secureTextEntry={(type === 'password')}
                keyboardType={keyboardType}
            />
            <ErrorText errorText={data.error} />
        </View>
    );
};

Input.propTypes = {
    label: React.PropTypes.string.isRequired,
    data: React.PropTypes.shape({
        value: React.PropTypes.string,
        error: React.PropTypes.string,
    }).isRequired,
    name: React.PropTypes.string.isRequired,
    handler: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['text', 'number', 'password', 'email']),
    required: React.PropTypes.bool,
};

Input.defaultProps = {
    type: 'text',
    required: false,
};

export default Input;
