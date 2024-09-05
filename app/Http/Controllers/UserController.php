<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Models\Position;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
class UserController extends Controller
{
    //display data from db
    public function show(){
        $fetchUser = User::orderBy('first_name','asc')->get();
        return Inertia::render('User/Show',['data' => $fetchUser]);
    }
    //routes for adding new user
    public function createForm(){
        $positions = Position::orderBy('name', 'asc')->get();
        $offices = Office::orderBy('name', 'asc')->get();
        return Inertia::render('User/Create',['positions' => $positions, 'offices' => $offices]);
    }
    //submit user
    public function create(Request $request)
    {
       $validateUser = $request->validate([
        'firstName' => 'required|string|max:255',
        'lastName' => 'required|string|max:255',
        'position' => 'required|string|max:255',
        'office' => 'required|string|max:255',
        'role' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users,email',
        'password' => 'required|string|min:8',
       ]);
        // Create a new user record
     User::create([
        'user_id' => Str::uuid()->toString(),
        'first_name' => $validateUser['firstName'],
        'last_name' => $validateUser['lastName'],
        'position' => $validateUser['position'],
        'office' => $validateUser['office'],
        'role' => $validateUser['role'],
        'email' => $validateUser['email'],
        'password' => Hash::make($validateUser['password']), // Hash the password before saving
    ]);
        return redirect()->route('user.create')->with('success', 'User created successfully.');
    }

    public function editForm($id){
        $user = User::findOrFail($id);
        $positions = Position::orderBy('name', 'asc')->get();
        $offices = Office::orderBy('name', 'asc')->get();
        return Inertia::render('User/Edit',['user' => $user,'positions' => $positions, 'offices' => $offices]);
    }
    public function edit(Request $request,$id){
        // Validate the incoming request data
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'office' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id, // Ignore unique check on the current user
            'password' => ['nullable', 'confirmed', Rules\Password::defaults()],
        ]);
        // Find the user by ID
        $user = User::findOrFail($id);
        // Updating the user
        $user->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'position' => $request->position,
            'office' => $request->office,
            'role' => $request->role,
            'email' => $request->email,
        ]);
        // If password is provided, hash and update it
        if ($request->filled('password')) {
            $user->update([
                'password' => Hash::make($request->password),
            ]);
        }
        // Redirect back with a success message
        return redirect()->back()->with('success', 'User updated successfully.');
    }
    //delete user
    public function destroy($id){
        $user = User::findOrFail($id);
        $user->delete();
        return redirect()->back()->with('success', 'User deleted successfully.');
    }
}