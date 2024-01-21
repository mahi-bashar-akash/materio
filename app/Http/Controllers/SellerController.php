<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class SellerController extends BaseController
{
    public function seller(){

        return view('seller.app');

    }

}
