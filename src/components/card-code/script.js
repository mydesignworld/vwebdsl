import AButton from '@/components/button/';
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'


export default {
    name        : 'CardCode',
    components  : {
        AButton
    },
    methods     : {
        copyCode: function(event) {
            console.log("copy 01");
            const selection = window.getSelection();
            const range = document.createRange();
            const textToCopy = event.target.nextElementSibling;
            console.log(textToCopy);
            range.selectNodeContents(textToCopy);
            selection.removeAllRanges();
            selection.addRange(range);
            // eslint-disable-next-line no-unused-vars
            const successful = document.execCommand('copy');
            console.log("copy 2");
            window.getSelection().removeAllRanges();
            if (!event.target.parentElement.querySelector('.alert')) {
                console.log("copy 3");
                console.log(selection);
                var alert = document.createElement('div');
                alert.classList.add('alert', 'alert-success', 'position-absolute', 'top-0', 'w-50', 'end-0', 'start-0', 'mx-auto', 'py-2');
                alert.style.transform = 'translate3d(0px, 0px, 0px)'
                alert.style.opacity = '0';
                alert.style.transition = '.35s ease';
                setTimeout(function() {
                alert.style.transform = 'translate3d(0px, 10px, 0px)';
                alert.style.setProperty("opacity", "0.9", "important");
                }, 100);
                alert.innerHTML = "Code successfully copied!";
                event.target.parentElement.appendChild(alert);
                setTimeout(function() {
                 alert.style.transform = 'translate3d(0px, 0px, 0px)'
                 alert.style.setProperty("opacity", "0", "important");
                }, 2000);
                setTimeout(function() {
                 event.target.parentElement.querySelector('.alert').remove();
                }, 2500);
            }
        }
        
    },
    mounted() {
        Prism.highlightAll();
    },

};