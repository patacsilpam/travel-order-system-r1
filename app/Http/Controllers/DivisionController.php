<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class DivisionController extends Controller
{
    //
    public function show(){
        $user = User::orderBy('first_name', 'asc')->get(); //fetch users to display in selecting office heads in select dropdown
        $office = Office::orderBy('name', 'asc')->get();
        return Inertia::render('Division/Show',['users' => $user, 'office' => $office]);
    }
    public function create(Request $request){
        $validateOffice = $request->validate([
            'name' => 'required|string|max:255',
            'office_head' => 'required|string|max:255'
        ]);

        //add new office
        Office::create([ 
            'office_id' => Str::uuid()->toString(),
            'name' => $validateOffice['name'],
            'office_head' => $validateOffice['office_head']
        ]);
        return back()->with('message', 'Student added successfully');
    }
    public function edit(){
        $office = Office::orderBy('name', 'asc')->get();
        return Inertia::render('Division/EditDivisionForm',['office' => $office]);
    }
}