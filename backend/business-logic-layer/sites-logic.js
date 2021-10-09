


//TODO
/** Example of Logic  By Or Hasson **/
require("../data-access-layer/dal");
const AreaModel = require("../models/area-model");
const SiteModel = require("../models/site-model");

function getAllAreasAsync() {
    return AreaModel.find().exec();
}

function getSitesByAreaAsync(areaId) {
    return SiteModel.find({ areaId }).populate("area").exec();
}

function addSiteAsync(site) {
    return site.save();
}

async function updateSiteAsync(site) {
    const info = await SiteModel.updateOne({ _id: site._id }, site).exec();
    return info.n ? site : null; // n = the number of documents updated.
}

function deleteSiteAsync(_id) {
    return SiteModel.deleteOne({ _id }).exec();
}

function getDataForDateRange(volume, startDate, endDate){
    return volumeDataModel.find({
        volume: volume,
        utc_ts: {
            $gt: startDate,
            $lt: endDate
        }
    }).exec();
}

module.exports = {
    getAllAreasAsync,
    getSitesByAreaAsync,
    addSiteAsync,
    updateSiteAsync,
    deleteSiteAsync
};
