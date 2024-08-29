<?php

namespace App\Http\Controllers;

use App\Models\Position;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DivisionController extends Controller
{
    //
    public function show(){
        $position = Position::all();
        return Inertia::render('Division/Show',['position' => $position]);
    }
}