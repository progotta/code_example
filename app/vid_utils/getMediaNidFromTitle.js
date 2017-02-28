const getMediaNidFromTitle = function(title) {

    const retTitleMediaType = this.options.retTitleMediaType || "PREVIEW";

    switch(retTitleMediaType) {
        case "PREVIEW":
            // need to grab the id for the preview object out of this title
            if (hasProp(title, 'preview') && hasProp(title.preview, 'nid')) {
                // then I need to pull in the object
                return title.preview.nid;
            } else {
                // this is an error condition
            }

            break;

        default:
            // this is an error condition
    }

    function hasProp (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }

}

module.exports = getMediaNidFromTitle;