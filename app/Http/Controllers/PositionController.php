<?php

namespace App\Http\Controllers;

use App\Models\Position;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
class PositionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function show()
    {
        //
        $position = Position::all();
        return Inertia::render('Positions/Show',['data' => $position]); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $validatePosition = $request->validate([
            'name' => 'required|string|max:255'
        ]);
        Position::create([
            'position_id' => Str::uuid()->toString(),
            'name' => $validatePosition['name'],
        ]);
        return back()->with('message', 'Student added successfully');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Position $position)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Position $position)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Position $position)
    {
        //
    }
}
