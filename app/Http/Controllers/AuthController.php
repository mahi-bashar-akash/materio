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
        /* Validator */
        $validator = Validator::make($request->all(), [
            'role' => 'required|in:admin,seller,delivery,customer',
            'name' => 'required|min:3',
            'email' => 'required|unique:users,email',
            'password' => 'required|confirmed|min:6',
            'mobile' => 'nullable|numeric',
        ]);

        /* Validator error message */
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        /* User create insert or save */
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'mobile' => $request->mobile,
            'role' => $request->role,
        ]);

        /* User switch role as domain system with route */
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

        /* User success message to show redirect route success message */
        return response()->json(['message' => 'Registration successful', 'redirect_route' => $redirectRoute], 200);
    }

}
