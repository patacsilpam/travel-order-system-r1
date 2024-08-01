<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DivisionController extends Controller
{
    //
    public function show(){
        return Inertia::render('Division/Show');
    }
    public function create(){
        return Inertia::render('Division/Create');
    }
}