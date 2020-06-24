/*
** Copyright (c) 2020, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/
console.info('Loaded Designer DynamicRoutingGateway View Javascript');

/*
** Define DynamicRoutingGateway View Artifact Class
 */
class DynamicRoutingGatewayView extends OkitDesignerArtefactView {
    constructor(artefact=null, json_view) {
        super(artefact, json_view);
        this.parent_id = artefact.compartment_id;
    }

    getParent() {
        return this.getDynamicRoutingGateway(this.getParentId());
    }

    getParentId() {
        return this.parent_id;
    }
}