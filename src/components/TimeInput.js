import React from 'react';
import { View, TimePickerAndroid, Button, StyleSheet, TextInput } from 'react-native';
import moment from 'moment';

import Label from './Label';
import ErrorText from './ErrorText';

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    input: {
        flex: 2,
    },
    button: {
        flex: 1,
    },
});

class TimeInput extends React.Component {
    openPicker = async () => {
        const { handler, name } = this.props;

        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                hour: 10,
                minute: 0,
                is24Hour: false,
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                handler({
                    valueChanged: true,
                    fieldName: name,
                    value: moment({ hour, minute }).format('HH:mm:ss'),
                });
            }
        } catch ({ code, message }) {
            console.warn(`TimePicker error - ${message}`);
        }
    };

    render() {
        const { label, data, required } = this.props;

        let displayValue = '';
        if (data.value) displayValue = moment(data.value, 'HH:mm:ss').format('LT');

        return (
            <View style={styles.container}>
                <Label label={label} required={required} error={data.error ? true : false} />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={displayValue}
                        editable={false}
                        placeholder="Select time using button on right"
                    />
                    <Button
                        style={styles.button}
                        title={"Select time"}
                        onPress={this.openPicker}
                    />
                </View>
                <ErrorText errorText={data.error} />
            </View>
        );
    }
}

TimeInput.propTypes = {
    label: React.PropTypes.string.isRequired,
    data: React.PropTypes.shape({
        value: React.PropTypes.string,
        error: React.PropTypes.string,
    }).isRequired,
    name: React.PropTypes.string.isRequired,
    handler: React.PropTypes.func.isRequired,
    required: React.PropTypes.bool,
};

TimeInput.defaultProps = {
    required: false,
};

export default TimeInput;

