import React from 'react';
import { View, DatePickerAndroid, Button, TextInput } from 'react-native';
import moment from 'moment';

import Label from './Label';
import ErrorText from './ErrorText';

const styles = {
    container: {
        margin: 10,
    },
    dateInput: {
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
};

class DateInput extends React.Component {
    openPicker = async () => {
        const { handler, name, data } = this.props;

        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: (data.value) ? new Date(data.value) : new Date(),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                handler({
                    valueChanged: true,
                    fieldName: name,
                    value: moment({ year, month, day }).format('YYYY-MM-DD'),
                });
            }
        } catch ({ code, message }) {
            console.warn(`Datepicker error - ${message}`);
        }
    };

    render() {
        const { label, data, required } = this.props;

        let displayValue = '';
        if (data.value) displayValue = moment(data.value).format('LL');

        let hasError = false;
        if (data.error) hasError = true;

        return (
            <View style={styles.container}>
                <Label label={label} required={required} error={hasError} />
                <View style={styles.dateInput}>
                    <TextInput
                        style={styles.input}
                        value={displayValue}
                        editable={false}
                        placeholder="Select date using button on right"
                    />
                    <Button
                        style={styles.button}
                        title={"Select date"}
                        onPress={this.openPicker}
                    />
                </View>
                <ErrorText errorText={data.error} />
            </View>
        );
    }
}

DateInput.propTypes = {
    label: React.PropTypes.string.isRequired,
    data: React.PropTypes.shape({
        value: React.PropTypes.string,
        error: React.PropTypes.string,
    }).isRequired,
    name: React.PropTypes.string.isRequired,
    handler: React.PropTypes.func.isRequired,
    required: React.PropTypes.bool,
};

DateInput.defaultProps = {
    required: false,
};

export default DateInput;
