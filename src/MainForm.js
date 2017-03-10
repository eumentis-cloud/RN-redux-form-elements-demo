import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import data from './data';

import Form from './components/Form';
import Input from './components/Input';
import TextArea from './components/TextArea';
import FormSectionHeader from './components/FormSectionHeader';
import DateInput from './components/DateInput';
import TimeInput from './components/TimeInput';
import SelectListItem from './components/SelectListItem';
import SelectList from './components/SelectList';
import SelectInput from './components/SelectInput';

import { formHandler } from './redux/testForm';

class MainForm extends React.Component {
    render() {
        const { formData, formHandler } = this.props;

        console.log(formData);

        return (
            <View>
                {/*<Input label="Name" data={formData.name} name="name" handler={formHandler} />*/}
                {/*<Input label="Mobile" data={formData.mobile} name="mobile" handler={formHandler} type="number" required />*/}
                {/*<Input label="Password" data={formData.password} name="password" handler={formHandler} type="password" required />*/}
                {/*<DateInput label="Date" data={formData.date} name="date" handler={formHandler} />*/}
                {/*<TimeInput label="Time" data={formData.time} name="time" handler={formHandler} />*/}
                {/*<SelectList*/}
                    {/*data={data}*/}
                    {/*displayTextKey={"display_name"}*/}
                    {/*searchOptions={{*/}
                        {/*keys: ['display_name'],*/}
                    {/*}}*/}
                {/*/>*/}
                <SelectInput
                    label="Inventory item"
                    data={formData.item}
                    name="item"
                    handler={formHandler}
                    listData={data}
                    displayTextKey={"display_name"}
                    searchOptions={{
                        keys: ['display_name'],
                    }}
                />
            </View>
        );
    }
}

MainForm.propTypes = {
    formData: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
    formHandler: React.PropTypes.func.isRequired,
};

const mapStateToProps = ({ formData }) => ({ formData });

export default connect(mapStateToProps, { formHandler })(MainForm);
