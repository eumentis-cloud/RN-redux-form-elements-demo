import React from 'react';

import Input from './Input';

const TextArea = (props) => (
    <Input
        multiline
        numberOfLines={3}
        {...props}
    />
);

TextArea.propTypes = {
    ...Input.propTypes,
};

export default TextArea;
