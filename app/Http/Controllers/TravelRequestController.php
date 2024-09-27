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
use Illuminate\Support\Facades\Http;

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

    public function calculateDistance(Request $request){
        $origin = $request->origin; // e.g., 'Manila, PH'
        $destination = $request->destination; // e.g., 'Baguio, PH'
        $apiKey = env('GOOGLE_MAPS_API_KEY');

        // Google Distance Matrix API URL
        $url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins={$origin}&destinations={$destination}&key={$apiKey}";

        // Send a request to Google API
        $response = Http::get($url);

        if ($response->successful()) {
            $data = $response->json();

            // Extract the distance value
            $distance = $data['rows'][0]['elements'][0]['distance']['text'];
            return response()->json([
                'distance' => $distance
            ]);
        }

        return response()->json([
            'message' => 'Failed to calculate distance'
        ], 500);
    }
}