import { columnHeader, rowContent, inProgress, columnHeaderProgress, columnHeaderClearing, columnHeaderClearingHistory }     from '../mixins/data-custom';

export default {
    /**
     * @override
     */
     data : () => ({
        columnHeader,
        columnHeaderProgress,
        columnHeaderClearing,
        columnHeaderClearingHistory,
        rowContent,
        inProgress,
        componentKey: 0,
        componentKeys: 0,
        modalHeader: 'Default'
    }),

    methods : {
        /**
        * Move items from one list to another
        * @param   {Object}  toDo  todo list to delete from array
        * @param   {Object}  index  index in list add to array
        */
        triggerChange(event, index, item)
        {

            console.log(index + ' - ' + event.option.id + ' - ' + item.curr);   
            const itemSelected = this.rowContent.splice(index, 1);
            this.inProgress.splice(0, 0, itemSelected[0]);
            console.log(itemSelected);
            // console.log(this.options[index].label);
            // this.selected = option.label;
            // this.$emit('change', { option, model : this.model });
        },
        pledgeCreate(event, row, items)
        {
            let myIndex = rowContent.findIndex(i => i.id === row.id);
            
            console.log('items - ' + items);
       
            // const itemSelected = this.rowContent.splice(myIndex, 1);
            // this.inProgress.splice(0, 0, itemSelected[0]);
            // this.inProgress.splice(0, 0, row);
            this.rowContent[myIndex].status = 'pending';
            
            var todaysDate = this.getDate();      
            this.rowContent[myIndex].date = todaysDate.nowDate;
            this.rowContent[myIndex].time = todaysDate.nowTime;
            // this.inProgress.unshift(row);
            this.inProgress.unshift({ date:todaysDate.nowDate, time:todaysDate.nowTime, status: row.status, id: row.id, total: row.total, im_ref: row.im_ref, value_date: row.value_date, entity: row.entity, account: row.account, curr: row.curr, trans_type: row.trans_type});
            this.forceRerender();
        }, 

        pledgeConfirm(event, row)
        {
            let confirmIndex = inProgress.findIndex(i => i.id === row.id);
            console.log('confirmIndex - ' + confirmIndex);
            document.getElementById('trigger-confirm-modal').click();
            const selectedRowID = row.im_ref
            console.log(event);
            console.log(selectedRowID);

            this.rowContent.forEach((refValue, index) => {
                const tindex = index;
                if (selectedRowID === refValue.im_ref) {
                    console.log(refValue.im_ref + ', ' + tindex + ' - ' + selectedRowID + ', ' + confirmIndex);
                    this.rowContent[tindex].status = 'confirmed';
                    this.rowContent[tindex].pledged = this.rowContent[tindex].total;
                    
                    this.inProgress[confirmIndex].status = 'confirmed';
                    this.inProgress[confirmIndex].pledged = this.inProgress[confirmIndex].total;
                    
                }
            });                   
        },        
        
        forceRerender() {
            this.componentKey += 1;
        },

        forceHistoryRender() {
            this.componentKeys += 1;
        },      
        
        getDate() {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = today.toLocaleString('default', { month: 'short' })
            var yy = today.getFullYear().toString().substring(2);
            var time = today.toLocaleTimeString('en-GB', { hour12: false, hour: "numeric", minute: "numeric"});
            today = dd + ' ' + mm + ' ' + yy;
            return {
                nowDate: today,
                nowTime: time,
            };            
        },        
        
        _showModal(event, showThis, row) {
            this.selectedItem = event.option.value;
            console.log(event);
            console.log(row);
            console.log(this.selectedItem);
            
            if (this.selectedItem === 'create') {
                this.modalHeader = 'Create IM Pledge';
                this.$refs.modal.showModal(showThis);
            }
            if (this.selectedItem === 'default') {
                this.modalHeader = 'IM Default';
                this.$refs.modal.showModal(showThis);
            }
            if (this.selectedItem === 'confirm') {
                this.modalHeader = 'Confirm IM Pledge';
                this.pledgeConfirm(event, row);
            }                      
        },       

        _hideModal(event, row) {
            this.pledgeCreate(event, row);
            document.getElementById('trigger-success-modal').click();
            // this.$refs.modal.hideModal(modalName);
        },
    
        
        triggerTab(tabName) {
            console.log('from table home - ' + tabName); 
            document.getElementById('historyUpdate').click();
        },
        
        triggerTabClearing() {
            this.inProgress.forEach((value1, index) => {
                if (value1.status === 'pending') {
                    const oindex = index;
                    this.rowContent.forEach((value2, index) => {
                        const tindex = index;
                        if (value1.im_ref === value2.im_ref) {
                            console.log(value2.im_ref + ', ' + tindex + ' - ' + value1.im_ref + ', ' + oindex);
                            setTimeout(function() {
                                value1.status = 'accepted';
                                value2.on_hold_set = value2.total;
                            }, 3000);
                        }
                    });
                }
            });   
        },

        amtChange(event, row) {
            let myIndex = rowContent.findIndex(i => i.id === row.id);
            var timeStamp = Date.now();
            const num = Number(event.target.value).toFixed(2);
            const amoutvalue = num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
            this.rowContent[myIndex].total = amoutvalue;
            this.rowContent[myIndex].im_ref = 'IM' + timeStamp;
           // this.row.total = event.target.value
        },
        
        amtInput(event, row) {
            console.log(event);
            console.log(row.account);
            console.log("input - " + event.target.value);
            this.amoutvalue = event.target.value;
            if (this.amoutvalue === '22222') {
                alert("222222")
            }
        },                    
    },

    computed: {

        pendingPledge () {
            return this.rowContent.filter(item => {
                return item.status === 'pending' || item.status === 'confirmed'
            })
        },

        fnalityFilter() {
            return this.rowContent.filter(item => {
                return item.entity === 'Fnality'
            })
        },
        cdbcFilter() {
            return this.rowContent.filter(item => {
                return item.entity.includes('CDBC')
            })
        }        
    },
};
