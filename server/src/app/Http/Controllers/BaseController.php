<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BaseController extends Controller
{
     /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($result,$message,$code=200){

        $response = [
            "status"=>true,
            "data"=>$result,
            "message"=>$message
        ];
        
        return response()->json($response,$code);
    }

    public function sendError($error,$errorMessage,$code=404){
        
        $response=[
            "status"=>false,
            "message"=>$error
        ];

        if(!empty($errorMessage)){
            $response["data"]=$errorMessage;
        };

        return response()->json($response,$code);

    }
}
