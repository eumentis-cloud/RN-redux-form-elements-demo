import React from 'react';
import { View } from 'react-native';

import RadioButton from './RadioButton';

const horizontalStyle = {
    container: {
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
};

const verticalStyle = {
    container: {
        padding: 10,
        flexDirection: 'column',
    },
};

class RadioButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: this.props.selectedItem,
        };
    }

    handleRadioButtonTouch = (id) => {
        const { data, idKey, onInputChange } = this.props;

        const value = data.find((item) => (item[idKey] === id));

        this.setState({
            selectedItem: value,
        });

        onInputChange(value);
    };

    renderRadioButtons = () => {
        const { data, displayTextKey, idKey, horizontal } = this.props;
        const { selectedItem } = this.state;

        return data.map((item) => {
            let selected = false;
            if (item[idKey] === selectedItem[idKey]) selected = true;
            return (
                <RadioButton
                    key={item[idKey]}
                    label={item[displayTextKey]}
                    selected={selected}
                    id={item[idKey]}
                    touchHandler={this.handleRadioButtonTouch}
                    vertical={horizontal}
                />
            );
        });
    };

    render() {
        let styles = verticalStyle;
        if (this.props.horizontal) styles = horizontalStyle;

        return (
            <View style={styles.container}>
                {this.renderRadioButtons()}
            </View>
        );
    }
}

RadioButtonGroup.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    displayTextKey: React.PropTypes.string.isRequired,  // The key of the object to be used to show as label
    idKey: React.PropTypes.string.isRequired,   // THe key of the object that is to be used as the id of objects in data array
    selectedItem: React.PropTypes.any.isRequired,
    onInputChange: React.PropTypes.func.isRequired,
    horizontal: React.PropTypes.bool,
};

RadioButtonGroup.defaultProps = {
    horizontal: false,
};

export default RadioButtonGroup;
