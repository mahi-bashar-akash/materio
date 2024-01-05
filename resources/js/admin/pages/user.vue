<template>

    <!-- user wrapper -->
    <div class="user-wrapper">

        <!-- user header -->
        <div class="user-header rounded-3">
            <div class="row">
                <div class="col-md-6 p-2">
                    <div class="position-relative">
                        <input type="text" name="" class="form-control ps-5" required autocomplete="new-search" placeholder="Search Here">
                        <div class="position-absolute top-50 start-0 translate-middle-y ps-3">
                            <i class="bi bi-search"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 d-flex justify-content-end align-items-center p-2">
                    <button type="button" class="btn btn-theme px-4" @click="manageUserOpen">
                        <i class="bi bi-plus-lg me-2"></i>
                        Add User
                    </button>
                </div>
            </div>
        </div>

        <!-- user body -->
        <div class="user-body border rounded-3 mt-4 p-3 bg-white cursor-content-menu">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th class="checkbox">
                            <input type="checkbox" name="checkbox" class="form-check-input">
                        </th>
                        <th class="id">Id.</th>
                        <th class="name">User.</th>
                        <th class="role">Role.</th>
                        <th class="status">Status.</th>
                        <th class="action text-end">Action.</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="checkbox">
                                <input type="checkbox" name="checkbox" class="form-check-input">
                            </td>
                            <td class="id">#5036</td>
                            <td class="name">
                                <div class="d-flex align-items-center justify-content-start">
                                    <img :src="`/images/clients/face-1.png`" class="img-fluid rounded-circle" style="width: 45px; height: 45px;" alt="client-avatar">
                                    <div class="ms-2">
                                        <div class="fw-bold">Andrew Burns</div>
                                        <small class="text-secondary">andrew@gmail.com</small>
                                    </div>
                                </div>
                            </td>
                            <td class="role">
                                Editor
                            </td>
                            <td class="status">
                                <div class="badge bg-success-subtle text-success px-4 py-2">
                                    Active
                                </div>
                            </td>
                            <td class="action">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Preview
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Edit
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="checkbox">
                                <input type="checkbox" name="checkbox" class="form-check-input">
                            </td>
                            <td class="id">#5035</td>
                            <td class="name">
                                <div class="d-flex align-items-center justify-content-start">
                                    <img :src="`/images/clients/face-2.png`" class="img-fluid rounded-circle" style="width: 45px; height: 45px;" alt="client-avatar">
                                    <div class="ms-2">
                                        <div class="fw-bold">Dana Carey</div>
                                        <small class="text-secondary">dana@gmail.com</small>
                                    </div>
                                </div>
                            </td>
                            <td class="role">
                                Admin
                            </td>
                            <td class="status">
                                <div class="badge bg-danger-subtle text-danger px-4 py-2">
                                    InActive
                                </div>
                            </td>
                            <td class="action">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Preview
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Edit
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="checkbox">
                                <input type="checkbox" name="checkbox" class="form-check-input">
                            </td>
                            <td class="id">#5034</td>
                            <td class="name">
                                <div class="d-flex align-items-center justify-content-start">
                                    <img :src="`/images/clients/face-3.png`" class="img-fluid rounded-circle" style="width: 45px; height: 45px;" alt="client-avatar">
                                    <div class="ms-2">
                                        <div class="fw-bold">Tammy Sanchez</div>
                                        <small class="text-secondary">tammy@gmail.com</small>
                                    </div>
                                </div>
                            </td>
                            <td class="role">
                                Maintainer
                            </td>
                            <td class="status">
                                <div class="badge bg-warning-subtle text-warning px-4 py-2">
                                    Pending
                                </div>
                            </td>
                            <td class="action">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Preview
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Edit
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="checkbox">
                                <input type="checkbox" name="checkbox" class="form-check-input">
                            </td>
                            <td class="id">#5033</td>
                            <td class="name">
                                <div class="d-flex align-items-center justify-content-start">
                                    <img :src="`/images/clients/face-4.png`" class="img-fluid rounded-circle" style="width: 45px; height: 45px;" alt="client-avatar">
                                    <div class="ms-2">
                                        <div class="fw-bold">Lori Wells</div>
                                        <small class="text-secondary">lori@gmail.com</small>
                                    </div>
                                </div>
                            </td>
                            <td class="role">
                                Author
                            </td>
                            <td class="status">
                                <div class="badge bg-warning-subtle text-warning px-4 py-2">
                                    Pending
                                </div>
                            </td>
                            <td class="action">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Preview
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Edit
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="checkbox">
                                <input type="checkbox" name="checkbox" class="form-check-input">
                            </td>
                            <td class="id">#5032</td>
                            <td class="name">
                                <div class="d-flex align-items-center justify-content-start">
                                    <img :src="`/images/clients/face-5.png`" class="img-fluid rounded-circle" style="width: 45px; height: 45px;" alt="client-avatar">
                                    <div class="ms-2">
                                        <div class="fw-bold">Richard Payne</div>
                                        <small class="text-secondary">richard@gmail.com</small>
                                    </div>
                                </div>
                            </td>
                            <td class="role">
                                Subscriber
                            </td>
                            <td class="status">
                                <div class="badge bg-danger-subtle text-danger px-4 py-2">
                                    InActive
                                </div>
                            </td>
                            <td class="action">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Preview
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Edit
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="checkbox">
                                <input type="checkbox" name="checkbox" class="form-check-input">
                            </td>
                            <td class="id">#5031</td>
                            <td class="name">
                                <div class="d-flex align-items-center justify-content-start">
                                    <img :src="`/images/clients/face-6.png`" class="img-fluid rounded-circle" style="width: 45px; height: 45px;" alt="client-avatar">
                                    <div class="ms-2">
                                        <div class="fw-bold">Jennifer Summers</div>
                                        <small class="text-secondary">jennifer@gmail.com</small>
                                    </div>
                                </div>
                            </td>
                            <td class="role">
                                Team manager
                            </td>
                            <td class="status">
                                <div class="badge bg-success-subtle text-success px-4 py-2">
                                    Active
                                </div>
                            </td>
                            <td class="action">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Preview
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Edit
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="checkbox">
                                <input type="checkbox" name="checkbox" class="form-check-input">
                            </td>
                            <td class="id">#5030</td>
                            <td class="name">
                                <div class="d-flex align-items-center justify-content-start">
                                    <div class="text-secondary bg-secondary-subtle rounded-circle fs-5 d-flex justify-content-center align-items-center" style="width: 45px; height: 45px;">
                                        JR
                                    </div>
                                    <div class="ms-2">
                                        <div class="fw-bold">Justin Richardson</div>
                                        <small class="text-secondary">justin@gmail.com</small>
                                    </div>
                                </div>
                            </td>
                            <td class="role">
                                academic coordinator
                            </td>
                            <td class="status">
                                <div class="badge bg-success-subtle text-success px-4 py-2">
                                    Active
                                </div>
                            </td>
                            <td class="action">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Preview
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Edit
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="checkbox">
                                <input type="checkbox" name="checkbox" class="form-check-input">
                            </td>
                            <td class="id">#5029</td>
                            <td class="name">
                                <div class="d-flex align-items-center justify-content-start">
                                    <div class="text-primary bg-primary-subtle rounded-circle fs-5 d-flex justify-content-center align-items-center" style="width: 45px; height: 45px;">
                                        HD
                                    </div>
                                    <div class="ms-2">
                                        <div class="fw-bold">Hossain Doe</div>
                                        <small class="text-secondary">hossain@gmail.com</small>
                                    </div>
                                </div>
                            </td>
                            <td class="role">
                                Security manager
                            </td>
                            <td class="status">
                                <div class="badge bg-success-subtle text-success px-4 py-2">
                                    Active
                                </div>
                            </td>
                            <td class="action">
                                <div class="d-flex align-items-center justify-content-end">
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end p-0 mt-2 overflow-hidden shadow border-0">
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Preview
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Edit
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button" class="dropdown-item px-3 py-2">
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- user manage modal -->
        <div class="modal fade" id="manageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header border-bottom-0">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Create User</h1>
                        <button type="button" class="btn-close" @click="manageUserClose"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <div class="form-group">
                                <label for="full-name" class="form-label">Full name</label>
                                <input id="full-name" type="text" name="full-name" class="form-control" required autocomplete="new-full-name">
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <label for="user-name" class="form-label">Username</label>
                                <input id="user-name" type="text" name="user-name" class="form-control" required autocomplete="new-user-name">
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <label for="email" class="form-label">Email</label>
                                <input id="email" type="email" name="email" class="form-control" required autocomplete="new-email">
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <label for="company" class="form-label">Company</label>
                                <input id="company" type="text" name="company" class="form-control" required autocomplete="new-company">
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <label for="country" class="form-label">Country</label>
                                <input id="country" type="text" name="country" class="form-control" required autocomplete="new-country">
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <label for="contact" class="form-label">Contact</label>
                                <input id="contact" type="text" name="contact" class="form-control" required autocomplete="new-contact">
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="form-group">
                                <label for="role" class="form-label">Role</label>
                                <select name="role" id="role" class="form-select">
                                    <option value="">Select Role</option>
                                    <option value="">Admin</option>
                                    <option value="">Author</option>
                                    <option value="">Editor</option>
                                    <option value="">Maintainer</option>
                                    <option value="">Subscriber</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="role" class="form-label">Status</label>
                            <select name="role" id="role" class="form-select">
                                <option value="">Select Status</option>
                                <option value="">Active</option>
                                <option value="">Inactive</option>
                                <option value="">Pending</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer border-top-0">
                        <button type="button" class="btn btn-light px-4 me-2" @click="manageUserClose">
                            CANCEL
                        </button>
                        <button type="button" class="btn btn-theme px-4">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

export default {

    data(){

        return{

        }

    },

    mounted() {



    },

    methods: {

        manageUserOpen(){
            const myModal = new bootstrap.Modal("#manageModal", {keyboard: false, backdrop: 'static'});
            myModal.show();
        },

        manageUserClose(){
            let myModalEl = document.getElementById('manageModal');
            let modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
        },

    }

}

</script>
