
export const columnHeader = [
    { "label": "Counterparty", "field": "entity", "sortable": true, "type": "String" },
    { "label": "Account", "field": "account", "sortable": false, "type": "String" },
    { "label": "Ccy", "field": "curr", "sortable": true, "type": "String" },
    { "label": "On Hold", "on_hold_set": "amt", "sortable": false, "type": "String" },
    { "label": "Pledged", "field": "pledged", "sortable": false, "type": "Number" },
    { "label": "Type", "field": "trans_type", "sortable": false, "type": "String" },
    { "label": "" },
]

export const columnHeaderProgress = [
    { "label": "Date", "field": "date", "sortable": true, "type": "String" },
    { "label": "Time", "field": "time", "sortable": true, "type": "String" },
    { "label": "Hold ID", "field": "time", "sortable": true, "type": "String" },
    { "label": "Value Date", "field": "valuedate", "sortable": true, "type": "String" },
    { "label": "Counterparty", "field": "entity", "sortable": true, "type": "String" },
    { "label": "Account", "field": "account", "sortable": false, "type": "String" },
    { "label": "Ccy", "field": "curr", "sortable": true, "type": "String" },
    { "label": "Amount", "field": "total", "sortable": true, "type": "Number" },
    { "label": "Status", "field": "status", "sortable": true, "type": "String" },
    { "label": "Type", "field": "trans_type", "sortable": false, "type": "String" },
    { "label": "" },
]

export const columnHeaderClearing = [
    { "label": "Counterparty", "field": "entity", "sortable": true, "type": "String" },
    { "label": "Account", "field": "account", "sortable": false, "type": "String" },
    { "label": "Ccy", "field": "curr", "sortable": true, "type": "String" },
    { "label": "On Hold", "on_hold_set": "amt", "sortable": false, "type": "String" },
    { "label": "Pledged", "field": "pledged", "sortable": false, "type": "Number" },
    { "label": "Type", "field": "trans_type", "sortable": false, "type": "String" },
]

export const columnHeaderClearingHistory = [
    { "label": "Date", "field": "date", "sortable": true, "type": "String" },
    { "label": "Time", "field": "time", "sortable": true, "type": "String" },
    { "label": "Hold ID", "field": "time", "sortable": true, "type": "String" },
    { "label": "Value Date", "field": "valuedate", "sortable": true, "type": "String" },
    { "label": "Counterparty", "field": "entity", "sortable": true, "type": "String" },
    { "label": "Account", "field": "account", "sortable": false, "type": "String" },
    { "label": "Ccy", "field": "curr", "sortable": true, "type": "String" },
    { "label": "Amount", "field": "total", "sortable": true, "type": "Number" },
    { "label": "Status", "field": "status", "sortable": true, "type": "String" },
    { "label": "Type", "field": "trans_type", "sortable": false, "type": "String" },
]

export const rowContent = [
    {"id":1,"curr":"GBP","entity":"UBS","total":"","on_hold_set":"0.00","on_hold_credit":323905888.16,"pledged":"0.00","trans_type":"IM","avail_credit":263853033.87,"account":"UBSGB00GBP","status":"","account_to":"LCHGB00GBP","legal_contract":"UBSGB00GBPXXXXXXXX","im_ref":"", 'date' : '', 'time' : ''},
    {"id":2,"curr":"GBP","entity":"CDBC","total":"","on_hold_set":"0.00","on_hold_credit":118123152.27,"pledged":"0.00","trans_type":"IM","avail_credit":182114818.83,"account":"CDBGB00GBP","status":"","account_to":"LCHGB00GBP","legal_contract":"UBSGB00GBPXXXXXXXX","im_ref":"", 'date' : '', 'time' : ''},
    {"id":3,"curr":"GBP","entity":"Santander","total":"","on_hold_set":"0.00","on_hold_credit":862553706.36,"pledged":"0.00","trans_type":"IM","avail_credit":913558750.32,"account":"SANGB00GBP","status":"","account_to":"LCHGB00GBP","legal_contract":"UBSGB00GBPXXXXXXXX","im_ref":"", 'date' : '', 'time' : ''}
]

export const inProgress = [];