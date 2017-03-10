import React from 'react';
import { View, Button, TextInput, Modal } from 'react-native';

import Label from './Label';
import ErrorText from './ErrorText';
import SelectList from './SelectList';

const styles = {
    container: {
        margin: 10,
    },
    inpBtnContainer: {
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

class SelectInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    closeModal = () => {
        this.setState({
            showModal: false,
        });
    };

    render() {
        const { label, data, required, listData, displayTextKey, searchOptions, name, handler } = this.props;

        let hasError = false;
        if (data.error) hasError = true;

        let displayValue = '';
        if (data.value) displayValue = data.value[displayTextKey];

        return (
            <View style={styles.container}>
                <Label label={label} required={required} error={hasError} />
                <View>
                    <View style={styles.inpBtnContainer}>
                        <TextInput
                            style={styles.input}
                            value={displayValue}
                            editable={false}
                            placeholder="Select item using button on right"
                        />
                        <Button
                            style={styles.button}
                            title={"Select"}
                            onPress={() => {
                                this.setState({
                                    showModal: true,
                                });
                            }}
                        />
                    </View>
                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        visible={this.state.showModal}
                        onRequestClose={this.closeModal}
                    >
                        <SelectList
                            data={listData}
                            displayTextKey={displayTextKey}
                            searchOptions={searchOptions}
                            selectedItem={data.value}
                            name={name}
                            handleSelection={handler}
                            closeModal={this.closeModal}
                        />
                    </Modal>
                </View>
                <ErrorText errorText={data.error} />
            </View>
        );
    }
}

SelectInput.propTypes = {
    listData: React.PropTypes.arrayOf(React.PropTypes.objectOf(React.PropTypes.any)).isRequired,
    displayTextKey: React.PropTypes.string.isRequired,
    searchOptions: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
    label: React.PropTypes.string.isRequired,
    data: React.PropTypes.shape({
        value: React.PropTypes.any,
        error: React.PropTypes.string,
    }).isRequired,
    name: React.PropTypes.string.isRequired,
    handler: React.PropTypes.func.isRequired,
    required: React.PropTypes.bool,
};
SelectInput.defaultProps = {
    required: false,
};

export default SelectInput;
