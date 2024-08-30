<?php

namespace App\Http\Controllers;

use App\Models\Position;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DivisionController extends Controller
{
    //
    public function show(){
        $user = User::orderBy('first_name', 'asc')->get();
        return Inertia::render('Division/Show',['users' => $user]);
    }
    public function create(Request $request){
        $request->validate(['name' => 'required|string|max:255',
        'office_head' => 'required|string|max:255']);
    }
}