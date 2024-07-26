<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
class TravelRequestController extends Controller
{
    //
    public function show()
    {
        return Inertia::render('TravelRequest/Show');
    }
}