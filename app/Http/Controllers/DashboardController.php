<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Spatie\Permission\Models\Role;

class DashboardController extends Controller
{
    //
    public function getEstadisticas(){
        $usuarios = User::all();
        $usuariosActivos = User::where('active',1)->get();
        $roles = Role::all();
        $data = array('usuariosRegistrados' => count($usuarios),
                        'usuariosActivos' => count($usuariosActivos),
                        'rolesRegistrados' => count($roles),);
                        return $data;
    }
}
