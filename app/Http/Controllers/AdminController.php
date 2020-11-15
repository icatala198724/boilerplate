<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class AdminController extends Controller
{
    //
    public function getRoles(){
        $roles = Role::all();
        $data = array('roles' => $roles, );
        return $data;

    }
    public function store(Request $request){
        $role = Role::create(['name' => $request->name]);
        $data = array('role' => $role );
        return $data;
    }
    public function delete(Request $request){
        $role = Role::find($request->id);
        $role->delete();
        $data = array('msg' => "rol borrado" );
        return $data;
    }
    public function search(Request $request){
        $role = Role::find($request->id);
        
        $data = array('role' => $role );
        return $data;
    }
    public function update(Request $request){
        $role = Role::find($request->id);
        $role->name = $request->name;
        $role->save();
        $data = array('msg' => "rol actualizado" );
        return $data;
    }
}
