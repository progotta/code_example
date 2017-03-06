const getTitleFromTitles = function(titles, selTitleMethod) {
    var retTitle = {};
    var selIndexId = null;
 
    try{
        switch(selTitleMethod) {
            case "LONGEST_PREVIEW":
                var maxPreDuration = 0;
                maxPreNid = null;
                titles.map(function (title, indexId) {  // this is sync, async would be better
                    var duration = null;
                    if (hasProp(title, 'preview') && hasProp(title.preview, 'duration')) {
                        duration = +title.preview.duration; // cast to number or NaN
                        if ((!isNaN(duration)) && (duration > maxPreDuration)) {
                            maxPreDuration = duration;
                            maxPreNid = title.preview.nid;
                            selIndexId = indexId;
                        }
                    }
                });

                break;

            default:
                throw new Error('Selected Title Media Type Invalid');
        }
    } catch (error) {
        // pass the error on
        throw error;
    }

    try{
        if (selIndexId) {
            return titles[selIndexId];
        } else {
            throw new Error('Selected Title Id Invalid');
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

module.exports = getTitleFromTitles;
