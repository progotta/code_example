'use strict';
const getMediaNidFromTitle = function(title, retTitleMediaType) {

    try {
            switch(retTitleMediaType) {
                case "PREVIEW":
                    // need to grab the id for the preview object out of this title
                    if (hasProp(title, 'preview') && hasProp(title.preview, 'nid')) {
                        // then I need to pull in the object
                        return title.preview.nid;
                    } else {
                        throw new Error('Title Object Properties Do Not Exisit');
                    }

                    break;

                default:
                    throw new Error('Title Media Type Invalid');
            }
    } catch (error) {
        // pass the error on
        throw error;
    }
    

    function hasProp (obj, prop) {
        try {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        } catch (error) {
            // pass the error on
            throw error;
        }
        
    }

}

module.exports = getMediaNidFromTitle;