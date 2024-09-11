<?php

namespace App\Http\Controllers;

use App\Models\Funds;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Carbon;
class TravelRequestController extends Controller
{
    //
   
    public function show()
    {
        return Inertia::render('TravelRequest/Show');
    }
    public function create()
    {   $funds = Funds::orderBy('funds','asc')->get();
        $users = User::orderBy('first_name','asc')->get();
        return Inertia::render('TravelRequest/Create',['funds' => $funds,'users' => $users]);
    }
}