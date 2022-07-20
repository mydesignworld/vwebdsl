
export const columns = [
    { 'label' : 'Currency', 'field' : 'curr', 'sortable' : true, 'type' : 'String' },
    { 'label' : 'Entity', 'field' : 'entity', 'sortable' : true, 'type' : 'String' },
    { 'label' : 'Total', 'field' : 'total', 'sortable' : true, 'type' : 'Number' },
    { 'label' : 'On Hold settlement', 'amt-ccy' : 'amt', 'sortable' : false, 'type' : 'Number' },
    { 'label' : 'On Hold Credit', 'field' : 'on_hold_credit', 'sortable' : false, 'type' : 'Number' },
    { 'label' : 'Available Credit', 'field' : 'avail_credit', 'sortable' : false, 'type' : 'Number' },
    { 'label' : 'Account', 'field' : 'account', 'sortable' : false, 'type' : 'Number' },
    { 'label' : '' }
];

export const toDos = [
    { 'id' : '1', 'curr' : 'EUR', 'entity' : 'CDBC', 'obligation' : 'RFP', 'progress' : 'Rate Set', 'rate' : 1.76, 'total' : 249000000.08, 'amtccy' : 811468275.05, 'on_hold_credit' : 323905888.16, 'avail_credit' : 263853033.87, 'date' : '11 Sep 2021', 'time' : '11:01:02', 'account' : '8ab9389986b7-45e3-b873-f1f425ee-213a' },
    { 'id' : '2', 'curr' : 'USD', 'entity' : 'Lloyds Bank', 'obligation' : 'TRF', 'progress' : 'Rate Set', 'rate' : 2.34, 'total' : 584866551.78, 'amtccy' : 836005804.05, 'on_hold_credit' : 118123152.27, 'avail_credit' : 182114818.83, 'date' : '11 Sep 2021', 'time' : '09:11:09', 'account' : '6ab9384986b7-45e3-b873-f1f425ee-615f' },
    { 'id' : '3', 'curr' : 'JPY', 'entity' : 'Santander', 'obligation' : 'RFP', 'progress' : 'Rate Set', 'rate' : 0.88, 'total' : 718183803.57, 'amtccy' : 579068449.02, 'on_hold_credit' : 862553706.36, 'avail_credit' : 913558750.32, 'date' : '11 Sep 2021', 'time' : '14:21:06', 'account' : '7cd9389986b7-45e3-b873-f1f425ee-439r' },
    { 'id' : '4', 'curr' : 'GBP', 'entity' : 'City Bank', 'obligation' : 'TRF', 'progress' : 'Rate Set', 'rate' : 2.42, 'total' : 537036206.45, 'amtccy' : 311019401.49, 'on_hold_credit' : 694272389.22, 'avail_credit' : 325603464.17, 'date' : '11 Sep 2021', 'time' : '08:09:44', 'account' : '2ui9389986b7-45e3-b873-f1f425ee-993x' }
];

export const inProgress = [
    { 'id' : '4', 'curr' : 'EUR', 'entity' : 'City Bank', 'obligation' : 'Urgent TRF', 'progress' : 'Rate Set', 'rate' : 2.42, 'total' : 500000000.55, 'amtccy' : 311019401.49, 'on_hold_credit' : 694272389.22, 'avail_credit' : 325603464.17, 'date' : '11 Sep 2021', 'time' : '08:09:44', 'account' : '2ui9389986b7-45e3-b873-f1f425ee-993x' }
];
export const completed = [];
export const toDoBank = [];
export const inProgressBank = [];
export const completedBank = [];
