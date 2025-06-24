<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;

class ProfilePictureController extends Controller
{
    public function update(Request $request): RedirectResponse
    {
        $request->validate([
            'profile_picture' => [
                'required',
                'image',
                File::image()
                ->max(10 * 1024)// 10MB max
                ->dimensions(Rule::dimensions()->minWidth(1000)->minHeight(1000)),
            ],
        ]);
        $user = $request->user();

        if ($user->profile_picture) {
            Storage::disk('public')->delete($user->profile_picture);
        }

        $path = $request->file('profile_picture')->store('profile-pictures', 'public');

        $user->update([
            'profile_picture' => $path,
        ]);

        return back()->with('success', 'Profile picture updated successfully.');
    }

    public function destroy(Request $request): RedirectResponse
    {
        $user = $request->user();

        if ($user->profile_picture) {
            Storage::disk('public')->delete($user->profile_picture);
            $user->update(['profile_picture' => null]);
        }

        return back()->with('success', 'Profile picture deleted successfully.');
    }
}
