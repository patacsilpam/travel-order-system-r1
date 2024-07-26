<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{
    //
    public function show(){
        return Inertia::render('Settings/Show');
    }
}