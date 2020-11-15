<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class DashboardController extends Controller
{
    //
    public function getEstadisticas(){
        $usuarios = User::all();
        $usuariosActivos = User::where('active',1)->get();
        $data = array('usuariosRegistrados' => count($usuarios),
                        'usuariosActivos' => count($usuariosActivos) );
                        return $data;
    }
}
