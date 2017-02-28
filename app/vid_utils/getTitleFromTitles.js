const getTitleFromTitles = function(titles) {

    const selTitleMethod = this.options.selTitleMethod || "LONGEST_PREVIEW";
    var retTitle = {};
    var selIndexId = null;

    switch(selTitleMethod) {
        case "LONGEST_PREVIEW":
            var maxPreDuration = 0;
            titles.map(function (title, indexId) {
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
            // this is an error condition
    }

    if (selIndexId) {
        // All good let's return the selected title
        this.results.selTitleObj = titles[selIndexId];
//        console.log(titles[selIndexId]);
        return titles[selIndexId];
    } else {
        console.log('Better luck next time!')
        // this is an error condition
    }

    function hasProp (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }

}

module.exports = getTitleFromTitles;
