<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
class UserController extends Controller
{
    //display data from db
    public function show(){
        $fetchUser = User::all();
        return Inertia::render('User/Show',['data' => $fetchUser]);
    }
    //routes for adding new user
    public function createForm(){
        return Inertia::render('User/Create');
    }
    //submit user
    public function create(Request $request)
    {
       $validateUser = $request->validate([
        'firstName' => 'required|string|max:255',
        'lastName' => 'required|string|max:255',
        'position' => 'required|string|max:255',
        'office' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users,email',
        'password' => 'required|string|min:8',
       ]);
        // Create a new user record
     User::create([
        'firstName' => $validateUser['firstName'],
        'lastName' => $validateUser['lastName'],
        'position' => $validateUser['position'],
        'office' => $validateUser['office'],
        'email' => $validateUser['email'],
        'password' => Hash::make($validateUser['password']), // Hash the password before saving
    ]);
        return redirect()->route('user.create')->with('success', 'User created successfully.');
    }

    public function editForm($id){
        $user = User::findOrFail($id);
        return Inertia::render('User/Edit',['user' => $user]);
    }
    public function edit(Request $request,$id){
        // Validate the incoming request data
        $validated = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'office' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
            'password' => 'required|string|min:8'
            // Add other fields you want to update
        ]);
        // Find the user by ID
        $user = User::findOrFail($id);

      
        $user->update($validated);

        // Redirect back with a success message
        return redirect()->back()->with('success', 'User updated successfully.');
    }
}