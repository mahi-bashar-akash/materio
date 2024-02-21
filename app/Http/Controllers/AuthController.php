<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends BaseController
{
    public function auth(){
        return view('auth.app');
    }

    /*** Register a new user.
     *
     *
     * @param  Request  $request
     *
     *
     * @return JsonResponse
     *
     *
     ***/
    public function register(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'role' => 'required|in:admin,seller,delivery,customer',
            'name' => 'required|min:3',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:6',
            'mobile' => 'nullable|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        switch ($request->role) {
            case 'admin':
                $email = $request->email . '@admin.com';
                break;
            case 'seller':
                $email = $request->email . '@seller.com';
                break;
            case 'delivery':
                $email = $request->email . '@delivery.com';
                break;
            case 'customer':
                $email = $request->email . '@gmail.com';
                break;
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $email,
            'password' => bcrypt($request->password),
            'mobile' => $request->mobile,
            'role' => $request->role,
        ]);

        switch ($request->role) {
            case 'admin':
                $redirectRoute = 'lvs.admin.any';
                break;
            case 'seller':
                $redirectRoute = 'lvs.seller.any';
                break;
            case 'delivery':
                $redirectRoute = 'lvs.delivery.any';
                break;
            case 'customer':
                $redirectRoute = 'lvs.front.any';
                break;
        }

        return response()->json(['message' => 'Registration successful', 'redirect_route' => $redirectRoute], 200);
    }

}
