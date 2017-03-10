import React from 'react';
import { View } from 'react-native';

import Label from './Label';
import ErrorText from './ErrorText';

import RadioButtonGroup from './RadioButtonGroup';

const styles = {
    container: {
        margin: 10,
    },
};

class RadioInput extends React.Component {
    handleInputChange = (value) => {
        const { name, handler } = this.props;
        handler({
            valueChanged: true,
            fieldName: name,
            value,
        });
    };

    render() {
        const { label, data, required } = this.props;
        const { radioData, displayTextKey, idKey, horizontal } = this.props;

        let hasError = false;
        if (data.error) hasError = true;

        return (
            <View style={styles.container}>
                <Label label={label} required={required} error={hasError} />
                <RadioButtonGroup
                    data={radioData}
                    selectedItem={data.value}
                    displayTextKey={displayTextKey}
                    idKey={idKey}
                    onInputChange={this.handleInputChange}
                    horizontal={horizontal}
                />
                <ErrorText errorText={data.error} />
            </View>
        );
    }
}

RadioInput.propTypes = {
    label: React.PropTypes.string.isRequired,
    data: React.PropTypes.shape({
        value: React.PropTypes.any,
        error: React.PropTypes.string,
    }).isRequired,
    name: React.PropTypes.string.isRequired,
    handler: React.PropTypes.func.isRequired,
    required: React.PropTypes.bool,

    radioData: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    displayTextKey: React.PropTypes.string.isRequired,  // The key of the object to be used to show as label
    idKey: React.PropTypes.string.isRequired,   // THe key of the object that is to be used as the id of objects in data array

    horizontal: React.PropTypes.bool,
};

RadioInput.defaultProps = {
    required: false,
    horizontal: false,
};

export default RadioInput;
