import $ from 'jquery';

class Modal {
    constructor () {
        this.openModalBtn = $(".open-modal");
        this.closeEle = $(".modal__close");
        this.modal = $(".modal");
        this.events();
    }

    events() {
        // have to add .bind() for this to point to the corrent context
        this.openModalBtn.click(this.openModal.bind(this));
        this.closeEle.click(this.closeModal.bind(this));
        //push any key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if (e.keyCode === 27 ) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass("modal--is-visible");
        return;
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;
