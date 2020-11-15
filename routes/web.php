<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'api'], function() {
    Route::group(['prefix' => 'v1'], function() {
        Route::get('/admin/users/index','UsersController@index');
        Route::get('/admin/users/changeStatus','UsersController@changeStatus');
        Route::post('/admin/users/store','UsersController@store');
        Route::post('/admin/users/delete','UsersController@delete');
        Route::post('/admin/users/search','UsersController@search');
        Route::post('/admin/users/update','UsersController@update');
        Route::post('/admin/users/changePassword','UsersController@changePassword');
        Route::get('/admin/dashboard/getEstadisticas','DashboardController@getEstadisticas');
        Route::get('/admin/roles/getRoles','AdminController@getRoles');
        Route::post('/admin/roles/store','AdminController@store');
        Route::post('/admin/roles/delete','AdminController@delete');
        Route::post('/admin/roles/update','AdminController@update');
        Route::post('/admin/roles/search','AdminController@search');



    });
    
});

Route::get('/{any}', 'ApplicationController')->where('any', '.*');
