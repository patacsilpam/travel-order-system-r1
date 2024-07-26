<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
class TravelOrdersController extends Controller
{
    //
    public function show(){
        return Inertia::render('Travel Order/Show');
    }
}