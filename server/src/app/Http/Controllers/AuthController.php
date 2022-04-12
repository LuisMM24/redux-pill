<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Hashing\BcryptHasher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends BaseController
{
    //

    public function register(Request $request){
        $input = $request->all();
        
        $validator = Validator::make($request->all(),[
            "firstName"=>"required",
            "lastName"=>"required",
            "email"=>"required | email",
            "password"=>"required",
        ]);
        
        if($validator->fails()){
            return $this->sendError("Error",$validator->errors(),401);
        }

        $input["password"] = bcrypt($input["password"]);

        $user = User::create($input);

        $success["token"] = $user->createToken("loginToken")->plainTextToken;
        $success["fullName"] = "$user->firstName $user->lastName";


        
        return $this->sendResponse($success,"User created",201);
    }

    public function login(Request $request){
        if(Auth::attempt(["email"=>$request->email, "password"=>$request->password])){
            $authUser = Auth::user();
            $user = User::find($authUser->id);
            $success["token"] = $user->createToken("loginToken")->plainTextToken;
            $success["fullName"] = "$user->firstName $user->lastName";
            return $this->sendResponse($success,"User logged",200);
        }else{
            return $this->sendError("Error","Failed to authenticate",400);
        }

    }
}
