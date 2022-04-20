<?php

namespace App\Http\Controllers;

use App\Http\Resources\PropertyResource;
use App\Models\Property;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PropertyController extends BaseController
{
    public function getProperties(Request $request){
        $filteredProperties = [];
        if(isset($request->city)){
            $filteredProperties = Property::where("city","=",$request->city)
            ->whereNested(function($query) use ($request){
                if(isset($request->room)){
                    $query->where("room","=",$request->room);   
                }
                if(isset($request->type)){
                    $query->where("type","=",$request->type);   
                }
                if(isset($request->condition)){
                    $query->where("condition","=",$request->condition);   
                }
                if(isset($request->bath)){
                    $query->where("bath","=",$request->bath);   
                }
                if(isset($request->price_gte)){
                    $query->where("price",">=",$request->price_gte);   
                }
                if(isset($request->price_lte)){
                    $query->where("price","<=",$request->price_lte);   
                }
                if(isset($request->pet)){
                    $query->where("pet",1);   
                }
                if(isset($request->garden)){
                    $query->where("garden",1);   
                }
                if(isset($request->swimming_pool)){
                    $query->where("swimming_pool",1);   
                }
                if(isset($request->terrace)){
                    $query->where("terrace",1);   
                }
            })
            ->get();
        }
       

        return $this->sendResponse($filteredProperties,"Properties recibed!");
    }

    public function createProperty(Request $request){

        $input = $request->all();
        $validator = Validator::make($request->all(),[
        'street'=>"required",
        'number'=>"required",
        'city'=>"required",
        'province'=>"required",
        'country'=>"required",
        "image"=>"required",
        'status'=>"required",
        'type'=>"required",
        'description'=>"required",
        'contact_mail'=>"required",
        'contact_phone'=>"required",
        'condition'=>"required",
        'room'=>"required",
        'bath'=>"required",
        'size'=>"required",
        'price'=>"required",
        'pet'=>"required",
        'garden'=>"required",
        'air_conditioning'=>"required",
        'swimming_pool'=>"required",
        'terrace'=>"required",
        'publication_date'=>"required"
        ]);
        if($validator->fails()){
            return $this->sendError("Failed to create",$validator->errors());
        }
        Property::create($input);

        return $this->sendResponse($input,"property created",201);
    }

}
