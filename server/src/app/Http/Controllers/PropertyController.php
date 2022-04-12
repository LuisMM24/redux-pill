<?php

namespace App\Http\Controllers;

use App\Http\Resources\PropertyResource;
use App\Models\Property;

use Illuminate\Http\Request;

class PropertyController extends BaseController
{
    public function getProperties(){
        $property = Property::all();
        return $this->sendResponse($property,"properties recibed!");
    }

    public function createProperty(Request $request){

        $input = $request->all();

        Property::create($input);

        return $this->sendResponse($input,"property created",201);
    }

}
