import React from 'react';
import { View, ListView } from 'react-native';
import Fuse from 'fuse.js';

import SearchBox from './SearchBox';
import SelectListItem from './SelectListItem';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
let fuse = null;

class SelectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            dataSource: ds.cloneWithRows(this.props.data),
        };
        fuse = new Fuse(this.props.data, this.props.searchOptions);
    }

    getSearchText = (value) => {
        if (value.length > 2) {
            this.setState({
                searchText: value,
                dataSource: ds.cloneWithRows(fuse.search(value)),
            });
        } else {
            this.setState({
                searchText: value,
                dataSource: ds.cloneWithRows(this.props.data),
            });
        }
    };

    listItemSelected = (id) => {
        this.props.closeModal();
        this.props.handleSelection({
            valueChanged: true,
            fieldName: this.props.name,
            value: this.props.data.find((item) => (item.id === id)),
        });
    };

    render() {
        const { selectedItem } = this.props;

        return (
            <View>
                <SearchBox
                    boxStyle={{ elevation: 3 }}
                    searchText={this.state.searchText}
                    handleTextChange={this.getSearchText}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => {
                        let selected = false;
                        if (selectedItem) {
                            if (selectedItem.id === rowData.id) selected = true;
                        }
                        return (
                            <SelectListItem
                                key={rowData.id}
                                text={rowData[this.props.displayTextKey]}
                                selected={selected}
                                id={rowData.id}
                                onPress={this.listItemSelected}
                            />
                        );
                    }}
                    keyboardShouldPersistTaps="handled"
                    enableEmptySections
                />
            </View>
        );
    }
}

SelectList.propTypes = {
    // type: React.PropTypes.oneOf(['single', 'multi']),   // To choose if its multi-select or single-select
    data: React.PropTypes.arrayOf(React.PropTypes.objectOf(React.PropTypes.any)).isRequired,    // The data to display the list
    displayTextKey: React.PropTypes.string.isRequired,  // The key of the object to be used to show in the list item
    searchOptions: React.PropTypes.objectOf(React.PropTypes.any).isRequired,    // The search options for fuse.js
    selectedItem: React.PropTypes.any.isRequired,
    handleSelection: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    closeModal: React.PropTypes.func.isRequired,
};

SelectList.defaultProps = {
    // type: 'single',
};

export default SelectList;
