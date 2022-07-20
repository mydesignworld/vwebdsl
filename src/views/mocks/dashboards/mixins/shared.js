import { columns, completed, completedBank, inProgress, inProgressBank, toDoBank, toDos }     from '../data-custom';

export default {
    /**
     * @override
     */
    data()
    {
        return {
            actionSelect    : false,
            toggleText      : false,
            showModalNow    : false,
            columns,
            toDos,
            completed,
            inProgress,
            toDoBank,
            completedBank,
            inProgressBank
        };
    },

    methods : {
        /**
        * Move items from one list to another
        * @param   {Object}  toDo  todo list to delete from array
        * @param   {Object}  index  index in list add to array
        */
        addToInProgress(toDo, index)
        {
            const item = this.toDos.splice(index, 1);
            this.inProgress.splice(0, 0, item[0]);
            this.toDoBank.splice(0, 0, item[0]);
            toDo.actionSelect = !toDo.actionSelect;
        },

        /**
        * Move items from one list to another
        * @param   {Object}  toDo  todo list to delete from array
        * @param   {Object}  index  index in list add to array
        */
        addToCompleted(toDo, index)
        {
            const item = this.inProgress.splice(index, 1);
            this.completed.splice(0, 0, item[0]);
        },

        /**
        * Move items from one list to another
        * @param   {Object}  toDo  todo list to delete from array
        * @param   {Object}  index  index in list add to array
        */
        addToToDoBank(toDo, index)
        {
            const item = this.completed.splice(index, 1);
            this.toDoBank.splice(0, 0, item[0]);
            this.$router.push({ name : 'Dashboard Bank' }); /* Navigate to show other bank */
        },

        /**
        * Move items from one list to another
        * @param   {Object}  toDo  todo list to delete from array
        * @param   {Object}  index  index in list add to array
        */
        addToInProgressBank(toDo, index)
        {
            const item = this.toDoBank.splice(index, 1) && this.inProgress.splice(index, 1);
            this.inProgressBank.splice(0, 0, item[0]);
            this.toDos.splice(0, 0, item[0]);
        },

        /**
        * Move items from one list to another
        * @param   {Object}  toDo  todo list to delete from array
        * @param   {Object}  index  index in list add to array
        */
        addToCompletedBank(toDo, index)
        {
            const item = this.inProgressBank.splice(index, 1);
            this.completedBank.splice(0, 0, item[0]);
        },
        /**
        * Move items from one list to another
        * @param   {Object}  toDo  todo list to delete from array
        * @param   {Object}  index  index in list add to array
        */
         addToFinalise(toDo, index)
         {
             console.log(toDo + ' - ' + index);
             const item = this.toDos.splice(index, 1);
             this.inProgress.splice(0, 0, item[0]);
            setTimeout(this.addToFinCompleted, 4000, toDo, index); 
         },
        /**
        * Move items from one list to another
        * @param   {Object}  toDo  todo list to delete from array
        * @param   {Object}  index  index in list add to array
        */
         addToFinCompleted(toDo, index)
        {
            const item = this.inProgress.splice(index, 1) && this.inProgressBank.splice(index, 1);
            this.completed.splice(0, 0, item[0]);
            this.completedBank.splice(0, 0, item[0]);
            console.log(toDo + ' - ' + index)
            
        },        
        /**
        * Move items from one list to another
        * @param   {Object}  index  index to delete from array
        */
        removeFromLists(index)
        {
            this.completedBank.splice(index, 1);
        },
        /**
        * Trigger modal from parent
        * @param   {String} triggerName   display model from parent
        */
        displayModal(triggerName)
        {
            this.trigger = triggerName;
            document.getElementById(triggerName).click();
        },
        /**
        * Run method when modal closes
        */
        closeMyModal()
        {
            this.showModalNow = false;
        },
        /**
        * Run method when modal open or closes
        */
        toggleModal()
        {
            this.showModalNow = !this.showModalNow;
        },
        /**
        * Toggle card body data
        * @param   {Object}  toDo  thich card should be toggled
        */
        toggleCardText(toDo)
        {
            toDo.toggleText = !toDo.toggleText;
        }
    },
    /**
    * Test to see if value gets passed on selected
    */
    created()
    {
        console.log(JSON.stringify(this.options[1].label));
        console.log(this.options[0].label);
    }
};
