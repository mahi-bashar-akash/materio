<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class AdminController extends BaseController
{
    public function admin(){

        return view('admin.app');

    }

}
