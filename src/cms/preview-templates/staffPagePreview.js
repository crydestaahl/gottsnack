import React from 'react'
import PropTypes from 'prop-types'
import { staffPageTemplate } from '../../templates/staff'

const staffPagePreview = ({ entry, widgetFor }) => (
    <staffPageTemplate
        title={entry.getIn(["data", "name"])}
        image={entry.getIn(["data", "image"])}
        content={widgetFor("presentation")}
    />
);

staffPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default staffPagePreview
