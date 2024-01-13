<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class FrontController extends BaseController
{
    public function front(){

        return view('front.app');

    }
}
