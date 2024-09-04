<?php

namespace App\Http\Controllers;

use App\Models\Position;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Office;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;

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

    /*public function editForm($id) {
        $office = Office::findOrFail($id);
        $user = User::orderBy('first_name','asc')->get();
        return Inertia::render('Division/EditDivisionForm', ['office' => $office, 'user' => $user]);
    }*/
    public function editForm($id){
        $office = Office::findOrFail($id);
        $user = User::orderBy('first_name', 'asc')->get();
        return Inertia::render('Division/Edit',['divisions' => $office,'users' => $user]);
    }

    public function edit(Request $request, $id){
        $request->validate(['name' => 'required|string|max:255']);
        $request->validate(['office_head' => 'required|string|max:255']);
        $office = Office::findOrFail($id);
        $office->update(['name' => $request->name,'office_head' => $request->office_head]);
        return back()->with('message', 'Edited successfully');
    }

    public function destroy($id){
        $office = Office::findOrFail($id);
        $office->delete();
        return back()->with('message', ' Deleted successfully');
    }
}