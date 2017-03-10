import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = {
    searchBox: {
        height: 60,
        backgroundColor: '#fff',
    },
    searchIcon: {
        position: 'absolute',
        left: 2,
        bottom: 15,
    },
    searchInput: {
        paddingLeft: 35,
        height: 60,
    },
};

const SearchBox = (props) => {
    const { handleTextChange, boxStyle, searchText } = props;

    return (
        <View style={[styles.searchBox, boxStyle]}>
            <Icon name="search" size={30} color="#03A9F4" style={styles.searchIcon} />
            <TextInput
                style={styles.searchInput}
                placeholder="Search item"
                value={searchText}
                onChangeText={(value) => {
                    handleTextChange(value);
                }}
            />
        </View>
    );
};

SearchBox.propTypes = {
    boxStyle: React.PropTypes.objectOf(React.PropTypes.any),
    searchText: React.PropTypes.string.isRequired,
    handleTextChange: React.PropTypes.func.isRequired,
};
SearchBox.defaultProps = {
    boxStyle: null,
};

export default SearchBox;
