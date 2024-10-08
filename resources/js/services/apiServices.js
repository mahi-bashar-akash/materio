import {createToaster} from "@meforma/vue-toaster";

const toaster = createToaster({
    position: 'top-left',
    duration: 5000,
    singleton: true,
});

const apiService = {

    headerContent: {
        'Content-Type': 'application/json; charset=utf-8',
    },

    mediaHeaderContent: {
        "Content-Type": "multipart/form-data",
    },

    /*ERROR HANDLER*/
    ErrorHandler(error) {
        Object.entries(error).forEach(([i, v]) => {
            const inputElement = document.querySelector(`[name="${i}"]`);
            const errorReport = inputElement?.closest('.form-group')?.querySelector('.error-report');
            const isInvalid = inputElement?.closest('.form-control',)?.classList.add('is-invalid-custom');
            if (errorReport) errorReport.textContent = v;
        });
    },

    /*CLEAR ERROR HANDLER*/
    ClearErrorHandler() {
        const elements = document.querySelectorAll('.error-report');
        const formControls = document.querySelectorAll('.form-control')
        formControls.forEach((e) => {
            e.classList.remove('is-invalid-custom')
        });
        elements.forEach((e) => {
            e.textContent = '';
        });
    },

}
export default apiService;
