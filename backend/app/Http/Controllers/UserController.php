<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// Importing Model Users
use App\Models\User;
// Importing Hash function
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    function register(Request $req)
    {
        // Making instance of User
        $user = new User;
        //Retriving the values from api and storing in DB
        $user->name = $req->input('name');
        $user->email = $req->input('email');
        $user->password = Hash::make($req->input('password'));
        $user->save();

        return $user;
    }
}
