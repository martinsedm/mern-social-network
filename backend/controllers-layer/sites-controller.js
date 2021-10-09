



//TODO
/** Example of Controller By Or Hasson **/
const express = require("express");
const logic = require("../business-logic-layer/sites-logic");
const SiteModel = require("../models/site-model");
const router = express.Router();


// GET http://localhost:3001/api/areas
router.get("/areas", async (request, response) => {
    try {
        const areas = await logic.getAllAreasAsync();
        response.json(areas);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

// GET http://localhost:3001/api/sites/by-area/:areaId
router.get("/sites/by-area/:areaId", async (request, response) => {
    try {
        const areaId = request.params.areaId;
        const sites = await logic.getSitesByAreaAsync(areaId);
        response.json(sites);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

// POST http://localhost:3001/api/sites
router.post("/sites", async (request, response) => {
    try {
        const site = new SiteModel(request.body);

        const errors = site.validateSync();
        if(errors) {
            response.status(400).send(errors);
            return;
        }

        const addedSite = await logic.addSiteAsync(site);
        response.status(201).json(addedSite);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

// PUT http://localhost:3001/api/sites/:_id
router.put("/sites/:_id", async (request, response) => {
    try {
        // Model:
        const _id = request.params._id;
        request.body._id = _id;
        const site = new SiteModel(request.body);

        // Validation:
        const errors = site.validateSync();
        if(errors) {
            response.status(400).send(errors);
            return;
        }

        // Logic:
        const updatedSite = await logic.updateSiteAsync(site)
        if(!updatedSite) {
            response.status(404).send(`id ${_id} not found`);
            return;
        }

        // Success:
        response.json(updatedSite);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

// DELETE http://localhost:3001/api/sites/:_id
router.delete("/sites/:_id", async (request, response) => {
    try {
        const _id = request.params._id;
        await logic.deleteSiteAsync(_id);
        response.sendStatus(204);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;
