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
        return Inertia::render("Funds/Show");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Funds $funds)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Funds $funds)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Funds $funds)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Funds $funds)
    {
        //
    }
}
