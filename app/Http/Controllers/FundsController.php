<?php

namespace App\Http\Controllers;

use App\Models\Funds;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FundsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $funds = Funds::orderBy('funds','asc')->get();
        return Inertia::render("Funds/Show", ['funds' => $funds]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function create(Request $request)
    {
        //
        $validateFunds =  $request->validate(['funds' => 'required|string|max:255']);
        Funds::create(['funds' => $validateFunds['funds']]);
        return back()->with('message', 'Student added successfully');

    }

    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id)
    {
        //
        $request->validate(['name' => 'required|string|max:255']);
        $funds = Funds::findOrFail($id);
        $funds->update(['funds' => $request->name]);
        return back()->with('message', ' Edited successfully');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $funds = Funds::findOrFail($id);
        $funds->delete();
        return back()->with('message', ' Edited successfully');

        

    }
}
